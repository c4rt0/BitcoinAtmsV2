# Assignment 2 - Enterprise Web Development

## Description

BitcoinsATMsV2 is an expanded in it's functionality adition to previous [repository](https://github.com/c4rt0/BitcoinATMs) of same title (off course without the V2 suffix :D ). The reason for a new repo is the fact that we all learn, and since in my opinion branching on previous version of this API was outrageously inconsistent... here I'm trying to improve on my weak skills.
This (first) commit is a mirror copy of previous repo, improved only by the quality (as you can tell) of readme.md file.

## Heroku 

This aplication is deployed on [HEROKU](https://bitcoin4tms.herokuapp.com/) in case you want to try out it's functionality before downloading.

## Installation

1. To install all necessary dependencies run  

```bash
npm install
```

## Usage


1. Make sure you are in project directory where index.js is located. Confirm existence of "db" directory - if such folder does'nt exist, change that.

2. Start mongodb with:

```bash
mongod -dbpath db
```

(This will fail if you skipped step one and db folder is not yet present in your working directory)

Instructions regarding this aplication assume you are using WebStorm as your IDE.
Navigate to location where routes.js is located and run index.js (mongodb should be already up and running)


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