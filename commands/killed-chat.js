module.exports = {
	name: 'killed-chat',
	description: 'Makes fun of person that killed chat',
	aliases: ['kc'],
	execute(message, args) {
        message.delete()
        victim = message.mentions.users.first()
        message.channel.send(`${victim} killed chat! Rip ✊`)
	},
};
