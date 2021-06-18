module.exports = {
	name: 'say',
	description: 'Repeats Message Sent by User',
	execute(message, args) {
        message.delete()
        message.channel.send(message.content.slice(5))
	},
};
