# URL-Shortener

This application is used to create shortened URLs from pre-existing URLs, similar to Bitly.

## Getting Started

Create a directory to pull in the repository and `cd` into it"

```
mkdir url-shortener
cd url-shortener
```

Initialize git and Pull in the git repo:

```
git init
git pull git@github.com:VermillionOne/URL-Shortener.git
```

### Prerequisites

This application is built using
- Node.js v7.0.0

### Installing

Run `npm install` to load in the NPM dependencies.

Set up your .env file (example):

```
DB_NAME=url-shortener
DB_USER=root
DB_PASS=root
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=8889
```

Run 'node server.js'

Alternatively, if you have [nodemon.js](http://nodemon.io/ "NodemonJS") installed, run `nodemon server.js` to have automated updating. With this method, each time you make a change in files, you can just reload the browser to access the updates.

Direct your browser to [localhost:3000](http://localhost:3000 "Linkr").

## Routes / API



## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [NodeJS](https://nodejs.org/en/)
* [EmbeddedJS](http://www.embeddedjs.com/)
* [NPM](https://www.npmjs.com/)
* [MySQL ^5.7](https://www.mysql.com/)
