module.exports = {
	name: 'vanish',
	description: 'Vanishes a user',
	execute(message, args) {
        message.delete()
        victim = message.mentions.users.first()
        message.channel.send(`☁️ Poof ☁️ ${victim} has been vanished!`)
	},
};
