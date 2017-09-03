'use strict';

function createSheet(dice){

  var sheet = {
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

function applyRaceModifiers(sheet,race){

  if (race == "elf"){
    sheet.primary.total.dextery = parseInt(sheet.primary.base.dextery) + 2;
  }

  return sheet;

}

function applyBackgroundModifiers(sheet,background){

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

  // create a resonse
  var response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Character successfully created.' }),
    sheet
  }
  callback(null, response);

};

module.exports.getAll = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You get all characters info!',
    }),
  };

  callback(null, response);
};

module.exports.get = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You get <id> stats!',
    }),
  };

  callback(null, response);
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
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You delete <id>, what have you done!?',
    }),
  };

  callback(null, response);
};

