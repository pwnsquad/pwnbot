import { Message } from 'discord.js'
import { BaseHandler } from './_base'

export class DataHandler extends BaseHandler {
  _name = 'data'
  
  async onInit() {}
  async onJoin() { return false }
  async onLeave() { return false }

  async onMessage(message: Message) {
    const dumbContent = message.content.replace(/[^a-zA-Z\d:]+/g, '').toLowerCase()
    if (
      dumbContent === 'dontasktoask'
      || dumbContent === 'donotasktoask'
      || dumbContent === 'noaskingtoask'
    ) {
      await message.channel.send('https://pwnsquad.net/data/')
    }

    return false
  }
}