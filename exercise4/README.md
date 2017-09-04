# Lambda & API gateway proyect

The idea here is to present the requirements and give some guidelines to make this code work.

### Requirements

First of all, you need to install npm package in order to access the other tools you are going to need.  `$ sudo apt-get install npm`

### Start project

Now that you have  npm installed on your box is time to set up this project

##### Install serveless  `$ npm install -g serverless`

> If you have some issue installing serverless because of the absence of node run  $ sudo ln -s `which nodejs` /usr/bin/node

##### Create project  `$ serverless create -t aws-nodejs #Creates a nodejs project template`
##### Configure credentials
In order to connect to our AWS account, and be able to deploy our project, we need to configure the AWS credentials. We can make this running:
`$ serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
##### Deploy the project
Once everything is configure we are ready to deploy this project, how? Running this:
`$ serverless deploy`
