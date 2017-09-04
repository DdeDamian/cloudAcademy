'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

function createSheet(dice, name, race, background){

  var sheet = {
    name : name,
    race : race,
    background : background,
    primary : {
      base : {
        strenght : dice.strenght,
        dextery : dice.dextery,
        constitution : dice.constitution,
        inteligence : dice.inteligence,
        wisdom : dice.wisdom,
        charisma : dice.charisma,
        appearance : dice.appearance
      },
      total : {
        strenght : dice.strenght,
        dextery : dice.dextery,
        constitution : dice.constitution,
        inteligence : dice.inteligence,
        wisdom : dice.wisdom,
        charisma : dice.charisma,
        appearance : dice.appearance
      }
    },
    secondary : {
      base : {
        resistance : "0",
        magic : "0",
        power : "0",
        calm : "0",
        training : {
        }
      },
      total : {
        resistance : "0",
        magic : "0",
        power : "0",
        calm : "0",
        training : {
        }
      }
    },
    resources : {
      life : "0",
      energy : "0",
      spirit : "0",
      mana : "0",
      reaction : "0",
      dodge : "0",
      bleeding : "0"
    }
  }

  return sheet;
}

function applyRaceModifiers(sheet){

  var race = sheet.race;

  if (race == "elf"){
    sheet.primary.total.dextery = String(parseInt(sheet.primary.base.dextery) + 2);
  } else if (race == "dwarf"){
      sheet.primary.total.dextery = String(parseInt(sheet.primary.base.dextery) - 2);
      sheet.primary.total.charisma = String(parseInt(sheet.primary.base.charisma) - 2);
      sheet.primary.total.constitution = String(parseInt(sheet.primary.base.constitution) + 2);
  } else if (race == "human"){
      sheet.primary.total.dextery = parseInt(sheet.primary.base.dextery) + 1;
  } else {
      sheet.primary.total.dextery = parseInt(sheet.primary.base.dextery) - 1;
  }

  return sheet;
}

function applyBackgroundModifiers(sheet){

  var background = sheet.background;
  return sheet;
}


module.exports.create = (event, context, callback) => {

  var race = event.body.race;
  if (typeof race !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Race is mandatory'));
    return;
  }

  var background = event.body.background;
  if (typeof background !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Background is mandatory.'));
    return;
  }

  var dice = event.body.dice;

  var sheet = createSheet(dice);
  applyRaceModifiers(sheet,race);
  applyBackgroundModifiers(sheet,background);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      sheet_id: uuid.v1(),
      sheet: sheet,
      //checked: false,
    },
  };

  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the todo item.'));
      return;
    }
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify(params.Item),
  };

  callback(null, response);

};

module.exports.getAll = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the ccharacter sheets.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};

module.exports.get = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      sheet_id: event.path.charId,
    },
  };

  // fetch todo from the database
  dynamoDb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the character sheet.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });

};

module.exports.update = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Character successfully updated!',
    }),
  };

  callback(null, response);
};

module.exports.delete = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      sheet_id: event.path.charId,
    },
  };

  // delete the todo from the database
  dynamoDb.delete(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t remove the sheet'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message : 'Item Successfully deleted',
      }),
    };
    callback(null, response);
  });

};

