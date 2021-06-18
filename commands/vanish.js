module.exports = {
	name: 'vanish',
	description: 'Vanishes a user',
	aliases: ['poof'],
	execute(message, args) {
        message.delete()
        victim = message.mentions.users.first()
        message.channel.send(`☁️ Poof ☁️ ${victim} has been vanished!`)
	},
};
