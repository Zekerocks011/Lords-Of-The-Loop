module.exports = {
	name: 'summon',
	description: 'Summons a user',
	execute(message, args) {
        message.delete()
        target = message.mentions.users.first()
        message.channel.send("<@"+message.author.id+"> has summoned <@"+target+">!")
	},
};
