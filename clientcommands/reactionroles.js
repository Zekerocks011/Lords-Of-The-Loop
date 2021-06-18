module.exports = (client) =>{
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
        
        if(reaction.message.channel.id == '851566301594779668'){
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
        
        if(reaction.message.channel.id == '851566301594779668'){
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
}
