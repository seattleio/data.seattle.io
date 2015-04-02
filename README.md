# data.seattle.io

Arbitrary datasets related to Seattle, WA

## Install

- Run `git clone git@github.com:seattleio/data.seattle.io.git`
- Change directory into quickstart: `cd data.seattle.io`
- Run `npm install`
- Create an admin user: `npm run flatsheet account create-admin`
- If you want to be able to send email: 
  - set up an account at sendgrid.com
  - rename `.env-sample` to `.env`
  - revise `.env` file to include your sendgrid username/password
- Run `npm start` to start the server

## Docs

See more documentation at [github.com/flatsheet/flatsheet](http://github.com/flatsheet/flatsheet)

## License

MIT