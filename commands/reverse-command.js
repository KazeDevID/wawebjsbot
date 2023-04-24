const { Command } = require('@kazesolo/wawebjs')
// True/Falsenya udh di buat default nya
class ReverseCommand extends Command {
  constructor () {
    super({
      id: 'reverse',
      aliases: ['reverse', 'backward'],
      category: 'IDK',
      description: 'Memutar Text', 
      usage: ['%c <text>'], 
      ownerOnly: false, 
      allowGroup: true, 
      allowDM: true 
    })
  }

  execute (message, args) {
    const text = args.join(' ').split('').reverse().join('')
    return this.client.sendMessage(message.from, text)
  }
}

module.exports = ReverseCommand
