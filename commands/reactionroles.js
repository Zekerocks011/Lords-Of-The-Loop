module.exports = {
	name: 'reactionroles',
	description: 'Resets the reactionroles',
	execute(message, args, Discord) {
        message.channel.bulkDelete(3)

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
	},
};
