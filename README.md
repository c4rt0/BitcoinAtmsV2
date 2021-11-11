# Assignment 2 - Enterprise Web Development

## Description

BitcoinsATMsV2 is an expanded in functionality addition to previous [repository](https://github.com/c4rt0/BitcoinATMs) of same title. 
The reason for a new repo is the fact that we all learn, and since in my opinion branching on previous version of this API was outrageously inconsistent... here I'm trying to improve on my weak (at the time of writing) skills.

## Heroku

This aplication is deployed on [HEROKU](https://bitcoin4tms.herokuapp.com/) 
## Installation

1. To install all necessary dependencies run :

```bash
npm install
```

## Usage
1. Before anything, you will need your .env file (in your main directory) which looks something like this:
```.dotenv
cookie_name=bitcoin-atms-v2
cookie_password=secretpasswordnotrevealedtoanyone
db=mongodb://localhost/bitcoin-atms-v2
name=dlprza0fk
key=645743286349499
secret=PftvACCjDZEVeRGuCSxhQ
```

2. In main project directory confirm existence of "db" folder - if it doesn't exist, change that.

3. Start mongodb with:

```bash
mongod -dbpath db
```

(This will fail if you skipped step 1 or 2)

Instructions regarding this application assume you are using WebStorm as your IDE.
Once mongodb is already up and running, again in your terminal window :
```bash
node index.js
```

## Login

As testing credentials use :

user : homer@simpson.com

password : secret


## REQUIREMENTS

POI Core characteristics:
	- Name
	- Category
	- Description

POI Core Service Features:
	- Signup / login
	- CRUD
	- Querry
	- Groupping into categories
