const channelId = "850360326717571075"
const rulesChannel = "851272638949359647"
module.exports = (client) =>{
    client.on("guildMemberAdd", (member) => {

        const message = `Welcome <@${
          member.id
        }> to Lords of the Loop! Be sure to check out all the information and rules in ${member.guild.channels.cache
          .get(rulesChannel)
          .toString()}`
      
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
        const loopMember = member.guild.roles.cache.find(role => role.name === "Loop Member")
        member.roles.add(loopMember)
      })
}
