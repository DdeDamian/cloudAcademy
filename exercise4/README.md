# Lambda & API gateway proyect

The idea here is to present the requirements and give some guidelines to make this code work.

### Requirements

First of all, you need to install npm package in order to access the other tools you are going to need.
`$ sudo apt-get install npm`

### Start project

Now that you have  npm installed on your box is time to set up this project

##### install serveless
`$ npm install -g serverless`

> If you have some issue installing serverless because of the absence of node run  `$ sudo ln -s \`which nodejs\` /usr/bin/node`
      # Create project
      $ serverless create -t aws-python # creates a python project duh
      # modify as youm wish handler and serverless
      #Configure credentials
      $ serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
       # deploy
        $ serverless deploy
