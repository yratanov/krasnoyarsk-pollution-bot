Telegram bot built on https://github.com/telegraf/telegraf

## Deploy docker image:

```
docker build -t yratanov/krasnoyarsk-pollution-bot .
docker push yratanov/krasnoyarsk-pollution-bot
```


On the server:
```
docker pull yratanov/krasnoyarsk-pollution-bot
docker stop krasnoyarsk-pollution-bot
docker rm krasnoyarsk-pollution-bot
docker run -d --name krasnoyarsk-pollution-bot -e TELEGRAM_TOKEN=<token> yratanov/krasnoyarsk-pollution-bot
```
