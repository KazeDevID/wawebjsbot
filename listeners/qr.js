const qrcode = require('qrcode-terminal')
const { Listener } = require('@kazesolo/wawebjs')

class QrListener extends Listener {
  constructor () {
    super({
      id: 'qr',
      event: 'qr'
    })
  }

  execute (qr) {
    qrcode.generate(qr, { small: true }, qr => {
      console.log(`Scan Qr nya bang:\n${qr}`)
    })
  }
}

module.exports = QrListener
