const Discord = require("discord.js")
const client = new Discord.Client()
const SQLite = require("better-sqlite3")
const sql = new SQLite('./database.sqlite')

client.once("ready", ()=>{
    console.log("Ready!")
})

//basic commands

client.on('message', (message) =>{
    if(message.content === 'Hello'){
        message.channel.send("Hi guys!")
    }
    if(message.content === '!ping'){
        message.channel.send("bean")
    }
    if(message.content.includes('bean')){
        message.channel.send("BEANNNNNNNNNNNNN")
    }
    if(message.content.includes('2!')){
        message.channel.send('https://media.discordapp.net/attachments/759191286116253740/851308935838826537/5VLqjJx.gif?width=320&height=180')
    }
    if(message.content.startsWith('!say')){
        message.delete()
        message.channel.send(message.content.slice(5))
    }
    if(message.content.startsWith('!summon')){
        target = message.mentions.users.first()
        message.channel.send("<@"+message.author.id+"> has summoned <@"+target+">!")
    }
    if(message.content === '!reactionroles'){
        const channel = '850360326717571075'
        const programmer = message.guild.roles.cache.find(role => role.name === "Programmer")
        const storyteller = message.guild.roles.cache.find(role => role.name === "Storyteller")
        const mechanic = message.guild.roles.cache.find(role => role.name === "Mechanic")
        const artist = message.guild.roles.cache.find(role => role.name === "Artist")
        const villager = message.guild.roles.cache.find(role => role.name === "Villager")
        const inkling = message.guild.roles.cache.find(role => role.name === "Inkling")
        const starWarrior = message.guild.roles.cache.find(role => role.name === "Star Warrior")
        const subrosian = message.guild.roles.cache.find(role => role.name === "Subrosian")
        const gymLeader = message.guild.roles.cache.find(role => role.name === "Gym Leader")
        const boo = message.guild.roles.cache.find(role => role.name === "Boo")
        const spirit = message.guild.roles.cache.find(role => role.name === "Spirit")

        const programmerEmoji = '🔨'
        const storytellerEmoji = '📖'
        const mechanicEmoji = '🛠️'
        const artistEmoji = '🖌️'
        const villagerEmoji = '🏠'
        const inklingEmoji = '🦑'
        const starWarriorEmoji = '⭐'
        const subrosianEmoji = '🌋'
        const gymLeaderEmoji = '🎽'
        const booEmoji = '👻'
        const spiritEmoji = '✨'

        let embed1 = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle("Planning Abilities Roles")
        .setDescription("Programmer: Those who make the bot work\nStoryteller: Those who write the lore.\nMechanic: Those who design game mechanics and functions.\nArtist: Those who make the art and designs.\n\n"
        + `${programmerEmoji} for Programmer\n`
        + `${storytellerEmoji} for Storyteller\n`
        + `${mechanicEmoji} for Mechanic\n`
        + `${artistEmoji} for Artist`)

        message.channel.send(embed1).then(function (message){
            message.react(programmerEmoji)
            message.react(storytellerEmoji)
            message.react(mechanicEmoji)
            message.react(artistEmoji)
        })

        let embed2 = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle("Stream Ranks")
        .setDescription("Choose your Stream Rank.\n\n"
        + `${villagerEmoji} for Villager\n`
        + `${inklingEmoji} for Inkling\n`
        + `${starWarriorEmoji} for Star Warrior\n`
        + `${subrosianEmoji} for Subrosian\n`
        + `${gymLeaderEmoji} for Gym Leader\n`
        + `${booEmoji} for Boo\n`
        + `${spiritEmoji} for Spirit`)

        message.channel.send(embed2).then(function (message){
            message.react(villagerEmoji)
            message.react(inklingEmoji)
            message.react(starWarriorEmoji)
            message.react(subrosianEmoji)
            message.react(gymLeaderEmoji)
            message.react(booEmoji)
            message.react(spiritEmoji)
        })
    }
})

//reaction roles

client.on('messageReactionAdd', async (reaction, user) => {
    const programmer = reaction.message.guild.roles.cache.find(role => role.name === "Programmer")
    const storyteller = reaction.message.guild.roles.cache.find(role => role.name === "Storyteller")
    const mechanic = reaction.message.guild.roles.cache.find(role => role.name === "Mechanic")
    const artist = reaction.message.guild.roles.cache.find(role => role.name === "Artist")
    const villager = reaction.message.guild.roles.cache.find(role => role.name === "Villager")
    const inkling = reaction.message.guild.roles.cache.find(role => role.name === "Inkling")
    const starWarrior = reaction.message.guild.roles.cache.find(role => role.name === "Star Warrior")
    const subrosian = reaction.message.guild.roles.cache.find(role => role.name === "Subrosian")
    const gymLeader = reaction.message.guild.roles.cache.find(role => role.name === "Gym Leader")
    const boo = reaction.message.guild.roles.cache.find(role => role.name === "Boo")
    const spirit = reaction.message.guild.roles.cache.find(role => role.name === "Spirit")
    
    const programmerEmoji = '🔨'
    const storytellerEmoji = '📖'
    const mechanicEmoji = '🛠️'
    const artistEmoji = '🖌️'
    const villagerEmoji = '🏠'
    const inklingEmoji = '🦑'
    const starWarriorEmoji = '⭐'
    const subrosianEmoji = '🌋'
    const gymLeaderEmoji = '🎽'
    const booEmoji = '👻'
    const spiritEmoji = '✨'
    
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return
    if(!reaction.message.guild) return
    
    if(reaction.message.channel.id == '850446335505465356'){
        if(reaction.emoji.name === programmerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(programmer)
            console.log("gave role: programmer")
        } else if(reaction.emoji.name === storytellerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(storyteller)
            console.log("gave role: storyteller")
        } else if(reaction.emoji.name === mechanicEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(mechanic)
            console.log("gave role: mechanic")
        } else if(reaction.emoji.name === artistEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(artist)
            console.log("gave role: artist")
        } else if(reaction.emoji.name === villagerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(villager)
            console.log("gave role: villager")
        } else if(reaction.emoji.name === inklingEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(inkling)
            console.log("gave role: inkling")
        } else if(reaction.emoji.name === starWarriorEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(starWarrior)
            console.log("gave role: star warrior")
        } else if(reaction.emoji.name === subrosianEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(subrosian)
            console.log("gave role: subrosian")
        } else if(reaction.emoji.name === gymLeaderEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(gymLeader)
            console.log("gave role: gym leader")
        } else if(reaction.emoji.name === booEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(boo)
            console.log("gave role: boo")
        } else if(reaction.emoji.name === spiritEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(spirit)
            console.log("gave role: spirit")
        } else{
            console.log("failed")
        }
    }
})

client.on('messageReactionRemove', async (reaction, user) => {
    const programmer = reaction.message.guild.roles.cache.find(role => role.name === "Programmer")
    const storyteller = reaction.message.guild.roles.cache.find(role => role.name === "Storyteller")
    const mechanic = reaction.message.guild.roles.cache.find(role => role.name === "Mechanic")
    const artist = reaction.message.guild.roles.cache.find(role => role.name === "Artist")
    const villager = reaction.message.guild.roles.cache.find(role => role.name === "Villager")
    const inkling = reaction.message.guild.roles.cache.find(role => role.name === "Inkling")
    const starWarrior = reaction.message.guild.roles.cache.find(role => role.name === "Star Warrior")
    const subrosian = reaction.message.guild.roles.cache.find(role => role.name === "Subrosian")
    const gymLeader = reaction.message.guild.roles.cache.find(role => role.name === "Gym Leader")
    const boo = reaction.message.guild.roles.cache.find(role => role.name === "Boo")
    const spirit = reaction.message.guild.roles.cache.find(role => role.name === "Spirit")
    
    const programmerEmoji = '🔨'
    const storytellerEmoji = '📖'
    const mechanicEmoji = '🛠️'
    const artistEmoji = '🖌️'
    const villagerEmoji = '🏠'
    const inklingEmoji = '🦑'
    const starWarriorEmoji = '⭐'
    const subrosianEmoji = '🌋'
    const gymLeaderEmoji = '🎽'
    const booEmoji = '👻'
    const spiritEmoji = '✨'
    
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return
    if(!reaction.message.guild) return
    
    if(reaction.message.channel.id == '850446335505465356'){
        if(reaction.emoji.name === programmerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(programmer)
            console.log("removed role: programmer")
        } else if(reaction.emoji.name === storytellerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(storyteller)
            console.log("removed role: storyteller")
        } else if(reaction.emoji.name === mechanicEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(mechanic)
            console.log("removed role: mechanic")
        } else if(reaction.emoji.name === artistEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(artist)
            console.log("removed role: artist")
        } else if(reaction.emoji.name === villagerEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(villager)
            console.log("removed role: villager")
        } else if(reaction.emoji.name === inklingEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(inkling)
            console.log("removed role: inkling")
        } else if(reaction.emoji.name === starWarriorEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(starWarrior)
            console.log("removed role: star warrior")
        } else if(reaction.emoji.name === subrosianEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(subrosian)
            console.log("removed role: subrosian")
        } else if(reaction.emoji.name === gymLeaderEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(gymLeader)
            console.log("removed role: gym leader")
        } else if(reaction.emoji.name === booEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(boo)
            console.log("removed role: boo")
        } else if(reaction.emoji.name === spiritEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(spirit)
            console.log("removed role: spirit")
        } else{
            console.log("failed")
        }
    }
})

//logs

client.on('message', (message) =>{
    if(message.channel.id === '851296233977151498'){

    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setDescription(message.content)
    .setTimestamp()
    .setTitle("#"+message.channel.name)
    client.channels.cache.get('851296233977151498').send(embed)
    }
})

//welcome message and role

const channelId = "850360326717571075";
const rulesChannel = "851272638949359647";
client.on("guildMemberAdd", (member) => {

  const message = `Welcome <@${
    member.id
  }> to Lords of the Loop! Be sure to check out our ${member.guild.channels.cache
    .get(rulesChannel)
    .toString()}`;

  const channel = member.guild.channels.cache.get(channelId);
  channel.send(message);
  const loopMember = member.guild.roles.cache.find(role => role.name === "Loop Member")
  member.roles.add(loopMember)
});

//character database

client.on("ready", () =>{
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name='characters'").get()
    if(!table['count(*)']){
        sql.prepare("CREATE TABLE characters (id TEXT PRIMARY KEY, description TEXT, skills TEXT, rarity INTERGER);").run()
        sql.prepare("CREATE UNIQUE INDEX idx_characters_id ON characters (id);").run()
        sql.pragma("synchronous = 1;")
        sql.pragma("journal_mode = wal;")
    }

    client.getCharacter = sql.prepare("SELECT * FROM characters WHERE id=?")
    client.createCharacter = sql.prepare("INSERT OR REPLACE INTO characters (id, description, skills, rarity) VALUES (@id, @description, @skills, @rarity);")
    
})

client.on("message", message =>{
    if(message.author.bot) return
    let character
    if(message.guild){
        if(message.content.startsWith("!character-create")){
            var information = message.content.slice(18).split(", ")
            console.log(information)
            character = client.getCharacter.get(information[0])
            if(!character){
                character = { id: `${information[0]}`, description: information[1], skills: information[2], rarity: information[3] }
                message.channel.send(`${information[0]} was created successfully!`)
            } else{
                character = { id: `${information[0]}`, description: information[1], skills: information[2], rarity: information[3] }
                message.channel.send(`${information[0]} was updated successfully!`)
            }
            client.createCharacter.run(character)
        }
    }
})

client.on("message", message=>{
    if(message.author.bot) return
    if(message.guild){
        if(message.content.startsWith("!character ")){
            var information = message.content.slice(11)
            console.log(information)
            const mes = sql.prepare(`SELECT * FROM characters WHERE id='${information}'`).all()
            const embed = new Discord.MessageEmbed()
            .setColor(0x00AE86);
            for(const data of mes){
               embed.addFields({ name: 'Character', value: data.id })
               embed.addFields({ name: 'Description', value: data.description })
               embed.addFields({ name: 'Skills', value: data.skills })
               embed.addFields({ name: 'Rarity', value: data.rarity })
            } return message.channel.send({embed})
        }
    }
})

client.on("message", message=>{
    if(message.author.bot) return
    if(message.guild){
        if(message.content === "!characters"){
            const mes = sql.prepare(`SELECT * FROM characters ORDER BY id ASC LIMIT 15`).all()
            const embed = new Discord.MessageEmbed()
            .setTitle("List of Characters")
            .setFooter("Page 1 of 1")
            .setColor(0x00AE86);
  
            for(const data of mes) {
                embed.addFields({ name: data.id, value: data.description });
            } return message.channel.send({embed});
        }
    }
})

client.login("ODUxMjgwOTg3MjQ5MzExNzY2.YL1_Mw.dRQ4bjTHknEOtX8JbPc1wP0pwaM")