const { join } = require('path')
const { WawebjsClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('@kazesolo/wawebjs')

class ExampleClient extends WawebjsClient {
  constructor () {
    super({
      owner: ['number_1', 'number_2'], 
      sessionPath: 'session.json', 
      clientOptions: {
        puppeteer: { headless: false }
      }
    })

    this.commandHandler = new CommandHandler(this, { prefix: '.', defaultDir: join(__dirname, 'commands') })
    this.inhibitorHandler = new InhibitorHandler(this, { defaultDir: join(__dirname, 'inhibitors') })
    this.listenerHandler = new ListenerHandler(this, { defaultDir: join(__dirname, 'listeners') })
    this.commandHandler.useInhibitor(this.inhibitorHandler)

    this.commandHandler.loadAll()
    this.inhibitorHandler.loadAll()
    this.listenerHandler.loadAll()
  }
}

client = new ExampleClient()
client.initialize()
