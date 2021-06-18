module.exports = {
	name: 'killed-chat',
	description: 'Makes fun of person that killed chat',
	execute(message, args) {
        message.delete()
        victim = message.mentions.users.first()
        message.channel.send(`${victim} killed chat! Rip ✊`)
	},
};
