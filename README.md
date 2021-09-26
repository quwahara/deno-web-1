# deno-web-1

## 概要

Deno Web Application を Heroku へ Deploy するYouTube 動画があったので、それを真似してやってみた。

Deno: Deploy a Deno App to Heroku | Tutorial  
https://www.youtube.com/watch?v=jC8gOkVQxdg

動画で扱ってるアプリケーションはちょっと複雑そうだったので、自分がやるときは、もっと簡単なもので試した。

具体的には下記の例を少し改変したもので試した。  
https://deno.land/manual@v1.14.1/examples/http_server#sample-web-server

以下のアプリケーションを公開した。  
https://deno-web-1.herokuapp.com/

## 主な作業

- Heroku で Create new app
- Buildpack 設定があるが、初めの設定は間違えで、後で訂正
- Procfile 作成
- GitHub Actions 設定
- Test Codeを追加

## 利用したリポジトリ

deploy-deno-to-heroku  
https://github.com/FSou1/deploy-deno-to-heroku

Heroku Buildpack for Deno  
https://github.com/chibat/heroku-buildpack-deno

cac  
https://github.com/cacjs/cac

## License

MIT

