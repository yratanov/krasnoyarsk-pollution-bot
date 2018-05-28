const Telegraf = require('telegraf');

const token = process.env.TELEGRAM_TOKEN;

const bot = new Telegraf(token);
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
});

const pollution = require('./lib/pollution');

pollution(bot);
bot.startPolling();
