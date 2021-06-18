//required things
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}
const SQLite = require('better-sqlite3')
const sql = new SQLite('./database.sqlite')
const { prefix, token } = require('./config.json')

//client Commands
const logs = require('./clientcommands/logs.js')
const reactionroles = require('./clientcommands/reactionroles.js')
const welcomemessage = require('./clientcommands/welcomemessage.js')
const characterdatabase = require('./clientcommands/characterdatabase.js')

client.once("ready", ()=>{
    console.log("Ready!")
    client.user.setActivity("for commands", {
        type: "WATCHING"
     });
})

//basic commands with files
client.on('message', (message) =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!client.commands.has(command)) return

	try {
		client.commands.get(command).execute(message, args, Discord, client)
	} catch (error) {
		console.error(error)
		message.reply('there was an error trying to execute that command!')
	}
})

//basic commands without prefix
client.on('message', message=>{
    if(message.content.toLowerCase() === 'hello'){
        message.channel.send("Hi guys!")
    }
    if(message.content.toLowerCase().includes('bean')){
        if(message.author.bot) return
        message.channel.send("BEANNNNNNNNNNNNN")
    }
    if(message.content.includes('2!')){
        message.channel.send('https://media.discordapp.net/attachments/759191286116253740/851308935838826537/5VLqjJx.gif?width=320&height=180')
    }
})

//client commands
client.on('ready', async () => {
    //logs
    logs(client, Discord)
    //reaction roles
    reactionroles(client)
    //welcome message and role
    welcomemessage(client)
    //character database
    characterdatabase(client, Discord, SQLite, sql)
})

client.login(token)
