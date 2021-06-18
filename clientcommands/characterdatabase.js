module.exports = (client, Discord, SQLite, sql) =>{
    client.on("ready", () =>{
        const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name='characters'").get()
        if(!table['count(*)']){
            sql.prepare("CREATE TABLE characters (id TEXT PRIMARY KEY, description TEXT, skills TEXT, rarity INTERGER, image TEXT)").run()
            sql.prepare("CREATE UNIQUE INDEX idx_characters_id ON characters (id)").run()
            sql.pragma("synchronous = 1")
            sql.pragma("journal_mode = wal")
        }
    
        client.getCharacter = sql.prepare("SELECT * FROM characters WHERE id=?")
        client.createCharacter = sql.prepare("INSERT OR REPLACE INTO characters (id, description, skills, rarity, image) VALUES (@id, @description, @skills, @rarity, @image)")
        
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
                    character = { id: `${information[0]}`, description: information[1], skills: information[2], rarity: information[3], image: information[4] }
                    message.channel.send(`${information[0]} was created successfully!`)
                } else{
                    character = { id: `${information[0]}`, description: information[1], skills: information[2], rarity: information[3], image: information[4] }
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
                const mes = sql.prepare(`SELECT * FROM characters WHERE id='${information}'`).all()
                const embed = new Discord.MessageEmbed()
                .setColor(0x00AE86)
                for(const data of mes){
                   embed.addFields({ name: 'Character', value: data.id })
                   embed.addFields({ name: 'Description', value: data.description })
                   embed.addFields({ name: 'Skills', value: data.skills })
                   embed.addFields({ name: 'Rarity', value: data.rarity })
                   embed.setImage(data.image)
                } return message.channel.send({embed})
            }
        }
    })
    
    client.on("message", message=>{
        if(message.author.bot) return
        if(message.guild){
            if(message.content === "!characters"){
                const mes = sql.prepare(`SELECT * FROM characters ORDER BY id ASC LIMIT 20`).all()
                const embed = new Discord.MessageEmbed()
                .setTitle("List of Characters")
                .setFooter("Page 1 of 1")
                .setColor(0x00AE86)
      
                for(const data of mes) {
                    embed.addFields({ name: data.id, value: data.description })
                } return message.channel.send({embed})
            }
        }
    })
}
