const fs = require('fs')
const { Command, utils } = require('@kazesolo/wawebjs')
// True/Falsenya udh di buat default nya
class DownloadMediaCommand extends Command {
  constructor () {
    super({
      id: 'media-dl',
      aliases: ['download', 'downloadmedia'],
      category: 'Media',
      description: 'Self explanatory',
      usage: ['%c'], 
      ownerOnly: false, 
      allowGroup: true,
      allowDM: true
    })
  }

  async execute (message) {
    const media = await utils.resolveMedia(message)

    if (media) {
      const ext = media.mimetype.split('/').pop()

      fs.writeFileSync(`id._serialized.${ext}`, Buffer.from(media.data, 'base64'))
      return await this.client.sendMessage(message.from, 'Done :D')
    }

    return await this.client.sendMessage(message.from, 'Medianya gak valid bang')
  }
}

module.exports = DownloadMediaCommand
