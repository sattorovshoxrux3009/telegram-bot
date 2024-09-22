const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 4000;
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const token = '7616988037:AAEv5iazl79YRZeH_VO7r1qptFqXb33pRFk';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Tugmalarni yaratish
  const options = {
    reply_markup: {
      keyboard: [
        ['A', 'B'], // Birinchi qator
        ['C', 'D'], // Ikkinchi qator
        [{ text: 'Ortga', callback_data: 'back' }] // Uchinchi qator
      ],
      resize_keyboard: true, // Tugmalarni ekranga moslashtirish
      one_time_keyboard: false // Klaviatura foydalanuvchiga doimiy ko'rinadi
    }
  };

  bot.sendMessage(chatId, 'Tugmalarni tanlang:', options);
});
