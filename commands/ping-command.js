const { Command } = require('@kazesolo/wawebjs')
// True/Falsenya udh di buat default nya
class PingCommand extends Command {
  constructor () {
    super({
      id: 'ping',
      aliases: ['ping', 'test'],
      category: 'IDK',
      description: 'Pongs you ¯\\_(ツ)_/¯',
      usage: ['%c'], 
      ownerOnly: false, 
      allowGroup: true,
      allowDM: true
    })
  }

  execute (message) {
    return this.client.sendMessage(message.from, 'Pong!')
  }
}

module.exports = PingCommand
