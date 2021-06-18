module.exports = {
	name: 'missingperms',
	description: 'Pings Em to notify of missing perms',
	aliases: ['mp'],
	execute(message, args) {
        message.delete()
        message.channel.send('<@471030262218752006> https://media.discordapp.net/attachments/850360326717571075/852932884976107560/unknown.png?width=526&height=33')
	},
};
