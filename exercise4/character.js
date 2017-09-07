'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

function createSheet(dice, name, race, background){

  var sheet = {
    name : name,
    race : race,
    background : background,
    speed : "0",
    experience : "0",
    appearance : dice.appearance,
    size : "",
    details : {
      height : "",
      weight : "",
      sex : "",
      eyes : "",
      hair : "",
      facial_hair : "",
      age : "",
      birth_date : ""
    },
    primary : {
      base : {
        strenght : dice.strenght,
        dextery : dice.dextery,
        constitution : dice.constitution,
        inteligence : dice.inteligence,
        wisdom : dice.wisdom,
        charisma : dice.charisma,
      },
      racial : {
        strenght : "0",
        dextery : "0",
        constitution : "0",
        inteligence : "0",
        wisdom : "0",
        charisma : "0",
      },
      advance : {
        strenght : "0",
        dextery : "0",
        constitution : "0",
        inteligence : "0",
        wisdom : "0",
        charisma : "0",
      },
      total : {
        strenght : dice.strenght,
        dextery : dice.dextery,
        constitution : dice.constitution,
        inteligence : dice.inteligence,
        wisdom : dice.wisdom,
        charisma : dice.charisma,
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
      racial : {
        resistance : "0",
        magic : "0",
        power : "0",
        calm : "0",
        training : {
        }
      },
      advance : {
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
    habilities : {
      artistics : {
        capability : "0",
        characteristic : {
          disguise : dice.inteligence
        },
        advance : {
          disguise : "0"
        },
        other : {
          disguise : "0"
        },
        total : {
          disguise : dice.inteligence
        }
      },
      athletics : {
        capability : "0",
        characteristic : {
          acrobatics : dice.dextery,
          balance : dice.dextery,
          mount : dice.dextery,
          swim : dice.strenght,
          jump : dice.strenght,
          climb : dice.strenght
        },
        advance : {
          acrobatic : "0",
          balance : "0",
          mount : "0",
          swim : "0",
          jump : "0",
          climb : "0"
        },
        other : {
          acrobatic : "0",
          balance : "0",
          mount : "0",
          swim : "0",
          jump : "0",
          climb : "0"
        },
        total : {
          acrobatic : dice.dextery,
          balance : dice.dextery,
          mount : dice.dextery,
          swim : dice.strenght,
          jump : dice.strenght,
          climb : dice.strenght
        }
      },
      educationals : {
        capability : "0",
        characteristic : {
          arcana : dice.inteligence,
          crafts : dice.inteligence,
          cosmology : dice.inteligence,
          geography : dice.inteligence,
          history : dice.inteligence,
          medicine : dice.inteligence,
          nature : dice.inteligence,
          religion : dice.inteligence
        },
        advance : {
          arcana : "0",
          crafts : "0",
          cosmology : "0",
          geography : "0",
          history : "0",
          medicine : "0",
          nature : "0",
          religion : "0"
        },
        other : {
          arcana : "0",
          crafts : "0",
          cosmology : "0",
          geography : "0",
          history : "0",
          medicine : "0",
          nature : "0",
          religion : "0"
        },
        total : {
          arcana : dice.inteligence,
          crafts : dice.inteligence,
          cosmology : dice.inteligence,
          geography : dice.inteligence,
          history : dice.inteligence,
          medicine : dice.inteligence,
          nature : dice.inteligence,
          religion : dice.inteligence
        }
      },
      general : {
        capability : "0",
        characteristic : {
          sight : dice.wisdom,
          listen : dice.wisdom,
          intuition : dice.wisdom,
          smell : dice.wisdom,
          history : dice.wisdom,
          survival : dice.wisdom
        },
        advance : {
          sight : "0",
          listen : "0",
          intuition : "0",
          smell : "0",
          history : "0",
          survival : "0"
        },
        other : {
          sight : "0",
          listen : "0",
          intuition : "0",
          smell : "0",
          history : "0",
          survival : "0"
        },
        total : {
          sight : dice.wisdom,
          listen : dice.wisdom,
          intuition : dice.wisdom,
          smell : dice.wisdom,
          history : dice.wisdom,
          survival : dice.wisdom
        }
      },
      stealth : {
        capability : "0",
        characteristic : {
          deactivate : dice.dextery,
          escapism : dice.dextery,
          hide : dice.dextery,
          hand_play : dice.dextery,
          stealth_move : dice.dextery,
          rope_use : dice.dextery
        },
        advance : {
          deactivate : "0",
          escapism : "0",
          hide : "0",
          hand_play : "0",
          stealth_move : "0",
          rope_use : "0"
        },
        other : {
          deactivate : "0",
          escapism : "0",
          hide : "0",
          hand_play : "0",
          stealth_move : "0",
          rope_use : "0"
        },
        total : {
          deactivate : dice.dextery,
          escapism : dice.dextery,
          hide : dice.dextery,
          hand_play : dice.dextery,
          stealth_move : dice.dextery,
          rope_use : dice.dextery
        }
      },
      socials : {
        capability : "0",
        characteristic : {
          diplomacy : dice.charisma,
          deceive : dice.charisma,
          intimidation : dice.charisma,
          gather_info : dice.charisma
        },
        advance : {
          diplomacy : "0",
          deceive : "0",
          intimidation : "0",
          gather_info : "0"
        },
        other : {
          diplomacy : "0",
          deceive : "0",
          intimidation : "0",
          gather_info : "0"
        },
        total : {
          diplomacy : dice.charisma,
          deceive : dice.charisma,
          intimidation : dice.charisma,
          gather_info : dice.charisma
        }
      }
    },
    resources : {
      life : dice.constitution,
      energy : "0",
      spirit : dice.wisdom,
      mana : "0",
      reaction : String(parseInt(dice.dextery) + parseInt(dice.inteligence)),
      dodge : String(parseInt(dice.dextery) + parseInt(dice.inteligence)),
      bleeding : dice.constitution
    }
  }

  return sheet;
}

function applyRaceModifiers(sheet){

  var race = sheet.race;

  switch(race) {

    case "elf":
      sheet.speed = "4";
      sheet.size = "medium";
      sheet.primary.total.dextery = String(parseInt(sheet.primary.base.dextery) + 1);
      sheet.primary.racial.dextery = String(parseInt(sheet.primary.racial.dextery) + 1);
      sheet.primary.total.inteligence = String(parseInt(sheet.primary.base.inteligence) + 1);
      sheet.primary.racial.inteligence = String(parseInt(sheet.primary.racial.inteligence) + 1);
      sheet.primary.total.constitution = String(parseInt(sheet.primary.base.constitution) - 2);
      sheet.primary.racial.constitution = String(parseInt(sheet.primary.racial.constitution) - 2);
      sheet.secondary.total.magic = String(parseInt(sheet.secondary.total.magic) + 2);
      sheet.secondary.racial.magic = String(parseInt(sheet.secondary.racial.magic) + 2);
      sheet.habilities.general.other.sight = String(parseInt(sheet.habilities.general.other.sight) + 2);
      sheet.habilities.general.total.sight = String(parseInt(sheet.habilities.general.total.sight) + 2);
      sheet.habilities.general.other.listen = String(parseInt(sheet.habilities.general.other.listen) + 2);
      sheet.habilities.general.total.listen = String(parseInt(sheet.habilities.general.total.listen) + 2);
      break;
    case "dwarf":
      sheet.speed = "2";
      sheet.size = "medium";
      sheet.primary.total.dextery = String(parseInt(sheet.primary.base.dextery) - 2);
      sheet.primary.racial.dextery = String(parseInt(sheet.primary.racial.dextery) - 2);
      sheet.primary.total.charisma = String(parseInt(sheet.primary.base.charisma) - 2);
      sheet.primary.racial.charisma = String(parseInt(sheet.primary.racial.charisma) - 2);
      sheet.primary.total.constitution = String(parseInt(sheet.primary.base.constitution) + 2);
      sheet.primary.racial.constitution = String(parseInt(sheet.primary.racial.constitution) + 2);
      break;
    case "human":
      sheet.speed = "4";
      sheet.size = "medium";
      sheet.experience = String(parseInt(sheet.experience) + 2500);
      break;
    case "orc":
      sheet.speed = "4";
      sheet.size = "medium";
      sheet.primary.total.strenght = String(parseInt(sheet.primary.base.strenght) + 3);
      sheet.primary.racial.strenght = String(parseInt(sheet.primary.racial.strenght) + 3);
      sheet.primary.total.inteligence = String(parseInt(sheet.primary.base.inteligence) - 2);
      sheet.primary.racial.inteligence = String(parseInt(sheet.primary.racial.inteligence) - 2);
      sheet.primary.total.wisdom = String(parseInt(sheet.primary.base.wisdom) - 1);
      sheet.primary.racial.wisdom = String(parseInt(sheet.primary.racial.wisdom) - 1);
      sheet.habilities.socials.other.intimidation = String(parseInt(sheet.habilities.socials.other.intimidation) + 4);
      sheet.habilities.socials.total.intimidation = String(parseInt(sheet.habilities.socials.total.intimidation) + 4);
      break;
    case "sirenian":
      sheet.speed = "4";
      sheet.size = "medium";
      sheet.primary.total.wisdom = String(parseInt(sheet.primary.base.wisdom) + 2);
      sheet.primary.racial.wisdom = String(parseInt(sheet.primary.racial.wisdom) + 2);
      sheet.primary.total.strenght = String(parseInt(sheet.primary.base.strenght) - 2);
      sheet.primary.racial.strenght = String(parseInt(sheet.primary.racial.strenght) - 2);
      sheet.primary.total.constitution = String(parseInt(sheet.primary.base.constitution) - 2);
      sheet.primary.racial.constitution = String(parseInt(sheet.primary.racial.constitution) - 2);
      sheet.resources.spirit = String(parseInt(sheet.resources.spirit) + 2);
      break;
    case "goblin":
      sheet.speed = "4";
      sheet.size = "small";
      sheet.primary.total.dextery = String(parseInt(sheet.primary.base.dextery) + 2);
      sheet.primary.racial.dextery = String(parseInt(sheet.primary.racial.dextery) + 2);
      sheet.habilities.stealth.other.hide = String(parseInt(sheet.habilities.stealth.other.hide) + 4);
      sheet.habilities.stealth.total.hide = String(parseInt(sheet.habilities.stealth.total.hide) + 4);
      break;
    case "gnome":
      sheet.speed = "2";
      sheet.size = "small";
      sheet.primary.total.inteligence = String(parseInt(sheet.primary.base.inteligence) + 2);
      sheet.primary.racial.inteligence = String(parseInt(sheet.primary.racial.inteligence) + 2);
      sheet.habilities.socials.other.diplomacy = String(parseInt(sheet.habilities.socials.other.diplomacy) + 4);
      sheet.habilities.socials.total.diplomacy = String(parseInt(sheet.habilities.socials.total.diplomacy) + 4);
      sheet.habilities.socials.other.deceive = String(parseInt(sheet.habilities.socials.other.deceive) + 4);
      sheet.habilities.socials.total.deceive = String(parseInt(sheet.habilities.socials.other.deceive) + 4);
      sheet.habilities.socials.other.gather_info = String(parseInt(sheet.habilities.socials.other.gather_info) + 4);
      sheet.habilities.socials.total.gather_info = String(parseInt(sheet.habilities.socials.total.gather_info) + 4);
      break;
  }
  return sheet;
}

function applyBackgroundModifiers(sheet){

  var background = sheet.background;

  switch(race) {
    //Astuto
    case "cunning" :
      sheet.secondary.base.resistance = String(parseInt(sheet.secondary.base.resistance) + 8);
      sheet.secondary.total.resistance = String(parseInt(sheet.secondary.total.resistance) + 8);
      sheet.secondary.base.training.weapon1 = String(parseInt(sheet.secondary.base.training.weapon1) + 2);
      sheet.secondary.total.training.weapon1 = String(parseInt(sheet.secondary.total.training.weapon1) + 2);
      sheet.habilities.educationals.capability = "1";
      sheet.habilities.artistics.capability = "1";
      sheet.habilities.general.capability = "2";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.stealth.capability = "3";
      break;
    //Elocuente
    case "glib" :
      sheet.secondary.base.magic = String(parseInt(sheet.secondary.base.magic) + 2);
      sheet.secondary.total.magic = String(parseInt(sheet.secondary.total.magic) + 2);
      sheet.secondary.base.resistance = String(parseInt(sheet.secondary.base.resistance) + 6);
      sheet.secondary.total.resistance = String(parseInt(sheet.secondary.total.resistance) + 6);
      sheet.habilities.educationals.capability = "2";
      sheet.habilities.artistics.capability = "3";
      sheet.habilities.social.capability = "3";
      sheet.habilities.general.capability = "1";
      break;
    //Montaraz
    case "montaraz" :
      sheet.secondary.base.resistance = String(parseInt(sheet.secondary.base.resistance) + 10);
      sheet.secondary.total.resistance = String(parseInt(sheet.secondary.total.resistance) + 10);
      sheet.secondary.base.calm = String(parseInt(sheet.secondary.base.calm) + 2);
      sheet.secondary.total.calm = String(parseInt(sheet.secondary.total.calm) + 2);
      sheet.secondary.base.training.weapon1 = String(parseInt(sheet.secondary.base.training.weapon1) + 2);
      sheet.secondary.total.training.weapon1 = String(parseInt(sheet.secondary.total.training.weapon1) + 2);
      sheet.habilities.educationals.other.nature = String(parseInt(sheet.habilities.educationals.other.nature) + 3);
      sheet.habilities.educationals.total.nature = String(parseInt(sheet.habilities.educationals.total.nature) + 3);
      sheet.habilities.educationals.capability = "1";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.stealth.capability = "2";
      sheet.habilities.general.capability = "3";
      break;
    //Combatiente
    case "fighter" :
      sheet.secondary.base.resistance = String(parseInt(sheet.secondary.base.resistance) + 10);
      sheet.secondary.total.resistance = String(parseInt(sheet.secondary.total.resistance) + 10);
      sheet.secondary.base.training.weapon1 = String(parseInt(sheet.secondary.base.training.weapon1) + 2);
      sheet.secondary.total.training.weapon1 = String(parseInt(sheet.secondary.total.training.weapon1) + 2);
      sheet.habilities.educationals.capability = "2";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.socials.capability = "1";
      sheet.habilities.general.capability = "3";
      //RESISTANCE
      break;
    //Aplicado
    case "studious" :
      sheet.secondary.base.magic = String(parseInt(sheet.secondary.base.magic) + 2);
      sheet.secondary.total.magic = String(parseInt(sheet.secondary.total.magic) + 2);
      sheet.secondary.base.power = String(parseInt(sheet.secondary.base.power) + 1);
      sheet.secondary.total.power = String(parseInt(sheet.secondary.total.power) + 1);
      sheet.secondary.base.resistance = String(parseInt(sheet.secondary.base.resistance) + 4);
      sheet.secondary.total.resistance = String(parseInt(sheet.secondary.total.resistance) + 4);
      sheet.habilities.educationals.other.arcana = String(parseInt(sheet.habilities.educationals.other.arcana) + 3);
      sheet.habilities.educationals.total.arcana = String(parseInt(sheet.habilities.educationals.total.arcana) + 3);
      sheet.habilities.educationals.capability = "3";
      sheet.habilities.artistics.capability = "2";
      sheet.habilities.general.capability = "1";
      sheet.resources.mana = String(parseInt(sheet.habilities.socials.total.gather_info) * 2)
      break;
  }

  return sheet;
}

function applySizeAdjustment(sheet){

  var background = sheet.size;
  if ( sheet.size === "small" ){
    sheet.primary.total.strenght = String(parseInt(Math.floor(parseFloat(sheet.primary.base.strenght) - (parseFloat(sheet.primary.base.strenght)/4))));
    sheet.primary.total.constitution = String(parseInt(Math.floor(parseFloat(sheet.primary.base.constitution) - (parseFloat(sheet.primary.base.constitution)/4))));
    sheet.secondary.total.resistance = String(parseInt(Math.floor(parseFloat(sheet.secondary.total.resistance) - (parseFloat(sheet.secondary.total.resistance)/4))));
  }
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

  var name = event.body.name;
  if (typeof name !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Name is mandatory.'));
    return;
  }

  var dice = event.body.dice;

  var sheet = createSheet(dice, name, race, background);
  applyRaceModifiers(sheet);
  applyBackgroundModifiers(sheet);
  applySizeAdjustment(sheet);

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

