module.exports = {
    name: "ping",
    description: "Test the bots response time.",
    execute(message) {
      let messageTime = Date.now() - message.createdTimestamp
      let respTime = Math.round(message.client.ws.ping)

      message
        .reply(`ResponseTime: ${messageTime}\nPing: ${respTime}`)
    },
  };