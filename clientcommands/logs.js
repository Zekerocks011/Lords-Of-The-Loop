module.exports = (client, Discord) =>{
    client.on('message', (message) =>{
        if(message.author.bot) return
        if(message.channel.id === '851296233977151498'){
        } else {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setDescription(message.content)
        if (messageAttachment) embed.setImage(messageAttachment)
        .setTimestamp()
        .setTitle("#"+message.channel.name)
        client.channels.cache.get('851296233977151498').send(embed)
        }
        console.log(message.channel.name+" - "+message.content+" - "+message.author.tag)
    })
}
