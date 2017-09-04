# Lambda & API gateway proyect.

The idea here is to present the requirements and give some guidelines to make this code work.

### Requirements.

First of all, you need to install npm package in order to access the other tools you are going to need.
`$ sudo apt-get install npm`

### Start project.

Now that you have  npm installed on your box is time to set up this project

##### Install serveless.
`$ npm install -g serverless`

> If you have some issue installing serverless because of the absence of node run  $ sudo ln -s `which nodejs` /usr/bin/node

##### Create project.
`$ serverless create -t aws-nodejs #Creates a nodejs project template`
##### Configure credentials.
In order to connect to our AWS account, and be able to deploy our project, we need to configure the AWS credentials. We can make this running:  
`$ serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
##### Deploy the project.
Once everything is configure we are ready to deploy this project, how? Running this:  
`$ serverless deploy`

# About the project.

The main idea here is to develop and manage an Rest API to serve as processsing tool for a D*&*D character sheet store and creator. The final objective is to make this services available regarless the platform. So, if you want to make it run on Android, you just need to create the UI to use this services.
The storage used is an AWS DynamoDB (you must create your own before start using the services).

# How it works.

Here we are going to explain each service.

##### GET     /character
This function return all the sheets stored on the DB.(Once in prod this function will be deprecated or restricted)

##### POST    /character
This function is the main one for characters creation. In order to correctly create the sheet the request body should have this format:

  {
    "name" : "Test Char",
    "race" : "dwarf",
    "background" : "warrior",
    "dice" : {
      "strenght" : "5",
      "dextery" : "5",
      "constitution" : "5",
      "inteligence" : "5",
      "wisdom" : "5",
      "charisma" : "5",
      "appearance" : "5"
    }
  }

Where
  "name" is your characters name
  "race" is your race, choosen from : elf, dwarf, human, orc, sirenian.
  "background" is the path you choose to follow with your character, picked from: 

##### GET     /character/{char_id}
This returns the character sheet for the given ID. (The format is 87746c20-9198-11e7-8b44-45f885ad2b8c)

##### UPDATE  /character/{char_id}
This updates the character sheet with the values provided in the request body for the gicen ID. ## WORK IN PROGRESS ##

##### DELETE  /character/{char_id}
This function just delete the character sheet using the given ID
