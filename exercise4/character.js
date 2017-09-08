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
      strenght : {
        base : dice.strenght,
        racial : "0",
        advance : "0",
        total : "0"
      },
      dextery : {
        base : dice.dextery,
        racial : "0",
        advance : "0",
        total : "0"
      },
      constitution : {
        base : dice.constitution,
        racial : "0",
        advance : "0",
        total : "0"
      },
      inteligence : {
        base : dice.inteligence,
        racial : "0",
        advance : "0",
        total : "0"
      },
      wisdom : {
        base : dice.wisdom,
        racial : "0",
        advance : "0",
        total : "0"
      },
      charisma : {
        base : dice.charisma,
        racial : "0",
        advance : "0",
        total : "0"
      }
    },
    secondary : {
      endurance : {
        base : "0",
        racial : "0",
        advance : "0",
        total : "0"
      },
      magic : {
        base : "0",
        racial : "0",
        advance : "0",
        total : "0"
      },
      power : {
        base : "0",
        racial : "0",
        advance : "0",
        total : "0"
      },
      calm : {
        base : "0",
        racial : "0",
        advance : "0",
        total : "0"
      },
      training : {
        first :{
          name : "",
          base : "0",
          racial : "0",
          advance : "0",
          total : "0"
        },
        second :{
          name : "",
          base : "0",
          racial : "0",
          advance : "0",
          total : "0"
        },
        third :{
          name : "",
          base : "0",
          racial : "0",
          advance : "0",
          total : "0"
        }
      }
    },
    habilities : {
      artistics : {
        capability : "0",
        disguise : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        play : {
          first :{
            name : "",
            characteristic : "0",
            advance : "0",
            other : "0",
            total : "0"
          },
          second :{
            name : "",
            characteristic : "0",
            advance : "0",
            other : "0",
            total : "0"
          },
          third :{
            name : "",
            characteristic : "0",
            advance : "0",
            other : "0",
            total : "0"
          }
        }
      },
      athletics : {
        capability : "0",
        acrobatics : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        balance : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        mount : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        swim : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        jump : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        climb : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        }
      },
      educationals : {
        capability : "0",
        arcana : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        crafts : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        cosmology : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        geography : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        history : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        medicine : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        nature : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        religion : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        }
      },
      general : {
        capability : "0",
        sight : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        listen : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        intuition : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        smell : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        survival : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        }
      },
      stealth : {
        capability : "0",
        deactivate : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        escapism : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        hide : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        hand_play : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        stealth_move : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        rope_use : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        }
      },
      socials : {
        capability : "0",
        diplomacy : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        deceive : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        intimidation : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        },
        gather_info : {
          characteristic : "0",
          advance : "0",
          other : "0",
          total : "0"
        }
      },
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
  };

  return sheet;
}

function applyRaceModifiers(sheet){

  var race = sheet.race;

  switch(race) {

    case "elf":
      sheet.speed = "4";
      sheet.size = "medium";
//      sheet.primary.dextery.total = String(parseInt(sheet.primary.dextery.base) + 1);
      sheet.primary.dextery.racial = String(parseInt(sheet.primary.dextery.racial) + 1);
//      sheet.primary.inteligence.total = String(parseInt(sheet.primary.inteligence.base) + 1);
      sheet.primary.inteligence.racial = String(parseInt(sheet.primary.inteligence.racial) + 1);
//      sheet.primary.constitution.total = String(parseInt(sheet.primary.constitution.total) - 2);
      sheet.primary.constitution.racial = String(parseInt(sheet.primary.constitution.racial) - 2);
//      sheet.secondary.magic.total = String(parseInt(sheet.secondary.magic.total) + 2);
      sheet.secondary.magic.racial = String(parseInt(sheet.secondary.magic.racial) + 2);
      sheet.habilities.general.sight.other = String(parseInt(sheet.habilities.general.sight.other) + 2);
      sheet.habilities.general.listen.other = String(parseInt(sheet.habilities.general.listen.other) + 2);
      break;
    case "dwarf":
      sheet.speed = "2";
      sheet.size = "medium";
//     sheet.primary.dextery.total = String(parseInt(sheet.primary.dextery.base) - 2);
      sheet.primary.dextery.racial = String(parseInt(sheet.primary.dextery.racial) - 2);
//      sheet.primary.charisma.total = String(parseInt(sheet.primary.charisma.base) - 2);
      sheet.primary.charisma.racial = String(parseInt(sheet.primary.charisma.racial) - 2);
//      sheet.primary.constitution.total = String(parseInt(sheet.primary.constitution.base) + 2);
      sheet.primary.constitution.racial = String(parseInt(sheet.primary.constitution.racial) + 2);
      break;
    case "human":
      sheet.speed = "4";
      sheet.size = "medium";
      sheet.experience = String(parseInt(sheet.experience) + 2500);
      break;
    case "orc":
      sheet.speed = "4";
      sheet.size = "medium";
//      sheet.primary.strenght.total = String(parseInt(sheet.primary.strenght.base) + 3);
      sheet.primary.strenght.racial = String(parseInt(sheet.primary.strenght.racial) + 3);
//      sheet.primary.inteligence.total = String(parseInt(sheet.primary.inteligence.base) - 2);
      sheet.primary.inteligence.racial = String(parseInt(sheet.primary.inteligence.racial) - 2);
//      sheet.primary.wisdom.total = String(parseInt(sheet.primary.wisdom.base) - 1);
      sheet.primary.wisdom.racial = String(parseInt(sheet.primary.wisdom.racial) - 1);
      sheet.habilities.socials.intimidation.other = String(parseInt(sheet.habilities.socials.intimidation.other) + 4);
      break;
    case "sirenian":
      sheet.speed = "4";
      sheet.size = "medium";
//      sheet.primary.wisdom.total = String(parseInt(sheet.primary.wisdom.base) + 2);
      sheet.primary.wisdom.racial = String(parseInt(sheet.primary.wisdom.racial) + 2);
//      sheet.primary.strenght.total = String(parseInt(sheet.primary.strenght.base) - 2);
      sheet.primary.strenght.racial = String(parseInt(sheet.primary.strenght.racial) - 2);
//      sheet.primary.constitution.total = String(parseInt(sheet.primary.constitution.base) - 2);
      sheet.primary.constitution.racial = String(parseInt(sheet.primary.constitution.racial) - 2);
      sheet.resources.spirit = String(parseInt(sheet.resources.spirit) + 2);
      break;
    case "goblin":
      sheet.speed = "4";
      sheet.size = "small";
//      sheet.primary.dextery.total = String(parseInt(sheet.primary.dextery.base) + 2);
      sheet.primary.dextery.racial = String(parseInt(sheet.primary.dextery.racial) + 2);
      sheet.habilities.stealth.hide.other = String(parseInt(sheet.habilities.stealth.hide.other) + 4);
      break;
    case "gnome":
      sheet.speed = "2";
      sheet.size = "small";
//      sheet.primary.inteligence.total = String(parseInt(sheet.primary.inteligence.base) + 2);
      sheet.primary.inteligence.racial = String(parseInt(sheet.primary.inteligence.racial) + 2);
      sheet.habilities.socials.diplomacy.other = String(parseInt(sheet.habilities.socials.diplomacy.other) + 4);
      sheet.habilities.socials.deceive.other = String(parseInt(sheet.habilities.socials.deceive.other) + 4);
      sheet.habilities.socials.gather_info.other = String(parseInt(sheet.habilities.socials.gather_info.other) + 4);
      break;
  }
  return sheet;
}

function applyBackgroundModifiers(sheet){

  var background = sheet.background;

  switch(background) {
    //Astuto
    case "cunning" :
      sheet.secondary.endurance.base = String(parseInt(sheet.secondary.endurance.base) + 8);
//      sheet.secondary.endurance.total = String(parseInt(sheet.secondary.endurance.total) + 8);
      sheet.secondary.training.first.base = String(parseInt(sheet.secondary.training.first.base) + 2);
//      sheet.secondary.training.first.total = String(parseInt(sheet.secondary.training.first.total) + 2);
      sheet.habilities.educationals.capability = "1";
      sheet.habilities.artistics.capability = "1";
      sheet.habilities.general.capability = "2";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.stealth.capability = "3";
      break;
    //Elocuente
    case "glib" :
      sheet.secondary.magic.base = String(parseInt(sheet.secondary.magic.base) + 2);
//      sheet.secondary.magic.total = String(parseInt(sheet.secondary.magic.total) + 2);
      sheet.secondary.endurance.base = String(parseInt(sheet.secondary.endurance.base) + 6);
//      sheet.secondary.endurance.total = String(parseInt(sheet.secondary.endurance.total) + 6);
      sheet.habilities.educationals.capability = "2";
      sheet.habilities.artistics.capability = "3";
      sheet.habilities.social.capability = "3";
      sheet.habilities.general.capability = "1";
      break;
    //Montaraz
    case "montaraz" :
      sheet.secondary.endurance.base = String(parseInt(sheet.secondary.endurance.base) + 10);
//      sheet.secondary.endurance.total = String(parseInt(sheet.secondary.endurance.total) + 10);
      sheet.secondary.calm.base = String(parseInt(sheet.secondary.calm.base) + 2);
      sheet.secondary.calm.total = String(parseInt(sheet.secondary.calm.total) + 2);
      sheet.secondary.training.first.base = String(parseInt(sheet.secondary.training.first.base) + 2);
//      sheet.secondary.training.first.total = String(parseInt(sheet.secondary.training.first.total) + 2);
      sheet.habilities.educationals.nature.other = String(parseInt(sheet.habilities.educationals.nature.other) + 3);
      sheet.habilities.educationals.capability = "1";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.stealth.capability = "2";
      sheet.habilities.general.capability = "3";
      break;
    //Combatiente
    case "warrior" :
      sheet.secondary.endurance.base = String(parseInt(sheet.secondary.endurance.base) + 10);
//      sheet.secondary.total.endurance = String(parseInt(sheet.secondary.total.endurance) + 10);
      sheet.secondary.training.first.base = String(parseInt(sheet.secondary.training.first.base) + 2);
//      sheet.secondary.total.training.weapon1 = String(parseInt(sheet.secondary.total.training.weapon1) + 2);
      sheet.habilities.educationals.capability = "2";
      sheet.habilities.athletics.capability = "3";
      sheet.habilities.socials.capability = "1";
      sheet.habilities.general.capability = "3";
      break;
    //Aplicado
    case "studious" :
      sheet.secondary.magic.base = String(parseInt(sheet.secondary.magic.base) + 2);
//      sheet.secondary.total.magic = String(parseInt(sheet.secondary.total.magic) + 2);
      sheet.secondary.power.base = String(parseInt(sheet.secondary.power.base) + 1);
//      sheet.secondary.total.power = String(parseInt(sheet.secondary.total.power) + 1);
      sheet.secondary.endurance.base = String(parseInt(sheet.secondary.endurance.base) + 4);
//      sheet.secondary.total.endurance = String(parseInt(sheet.secondary.total.endurance) + 4);
      sheet.habilities.educationals.arcana.other = String(parseInt(sheet.habilities.educationals.arcana.other) + 3);
      sheet.habilities.educationals.capability = "3";
      sheet.habilities.artistics.capability = "2";
      sheet.habilities.general.capability = "1";
      break;
  }

  return sheet;
}

function applySizeAdjustment(sheet){

  //esto se puede hacer mas facil haciendo derecho el * 0.75
  if ( sheet.size === "small" ){
    sheet.primary.strenght.total = String(parseInt(Math.floor(parseFloat(sheet.primary.strenght.base) - (parseFloat(sheet.primary.strenght.base)/4))));
    sheet.primary.strenght.base = String(parseInt(Math.floor(parseFloat(sheet.primary.strenght.base) - (parseFloat(sheet.primary.strenght.base)/4))));
    sheet.primary.constitution.total = String(parseInt(Math.floor(parseFloat(sheet.primary.constitution.base) - (parseFloat(sheet.primary.constitution.base)/4))));
    sheet.primary.constitution.base = String(parseInt(Math.floor(parseFloat(sheet.primary.constitution.base) - (parseFloat(sheet.primary.constitution.base)/4))));
    sheet.secondary.endurance.total = String(parseInt(Math.floor(parseFloat(sheet.secondary.endurance.total) - (parseFloat(sheet.secondary.endurance.total)/4))));
    sheet.secondary.endurance.base = String(parseInt(Math.floor(parseFloat(sheet.secondary.endurance.total) - (parseFloat(sheet.secondary.endurance.total)/4))));
  }
  else {
    sheet.primary.strenght.total = String( parseInt(sheet.primary.strenght.base) + parseInt(sheet.primary.strenght.racial) + parseInt(sheet.primary.strenght.advance) );
    sheet.primary.constitution.total = String( parseInt(sheet.primary.constitution.base) + parseInt(sheet.primary.constitution.racial) + parseInt(sheet.primary.constitution.advance) );
  }

  //Primary totals calculation
  sheet.primary.dextery.total = String( parseInt(sheet.primary.dextery.base) + parseInt(sheet.primary.dextery.racial) + parseInt(sheet.primary.dextery.advance) );
  sheet.primary.inteligence.total = String( parseInt(sheet.primary.inteligence.base) + parseInt(sheet.primary.inteligence.racial) + parseInt(sheet.primary.inteligence.advance) );
  sheet.primary.wisdom.total = String( parseInt(sheet.primary.wisdom.base) + parseInt(sheet.primary.wisdom.racial) + parseInt(sheet.primary.wisdom.advance) );
  sheet.primary.charisma.total = String( parseInt(sheet.primary.charisma.base) + parseInt(sheet.primary.charisma.racial) + parseInt(sheet.primary.charisma.advance) );

  return sheet;
}

function calculateTotals(sheet){

  //Primary totals calculation
  sheet.primary.strenght.total = String( parseInt(sheet.primary.strenght.base) + parseInt(sheet.primary.strenght.racial) + parseInt(sheet.primary.strenght.advance) );
  sheet.primary.dextery.total = String( parseInt(sheet.primary.dextery.base) + parseInt(sheet.primary.dextery.racial) + parseInt(sheet.primary.dextery.advance) );
  sheet.primary.constitution.total = String( parseInt(sheet.primary.constitution.base) + parseInt(sheet.primary.constitution.racial) + parseInt(sheet.primary.constitution.advance) );
  sheet.primary.inteligence.total = String( parseInt(sheet.primary.inteligence.base) + parseInt(sheet.primary.inteligence.racial) + parseInt(sheet.primary.inteligence.advance) );
  sheet.primary.wisdom.total = String( parseInt(sheet.primary.wisdom.base) + parseInt(sheet.primary.wisdom.racial) + parseInt(sheet.primary.wisdom.advance) );
  sheet.primary.charisma.total = String( parseInt(sheet.primary.charisma.base) + parseInt(sheet.primary.charisma.racial) + parseInt(sheet.primary.charisma.advance) );

  //Secondary totals calculation
  sheet.secondary.endurance.total = String( parseInt(sheet.secondary.endurance.base) + parseInt(sheet.secondary.endurance.racial) + parseInt(sheet.secondary.endurance.advance) );
  sheet.secondary.magic.total = String( parseInt(sheet.secondary.magic.base) + parseInt(sheet.secondary.magic.racial) + parseInt(sheet.secondary.magic.advance) );
  sheet.secondary.power.total = String( parseInt(sheet.secondary.power.base) + parseInt(sheet.secondary.power.racial) + parseInt(sheet.secondary.power.advance) );
  sheet.secondary.calm.total = String( parseInt(sheet.secondary.calm.base) + parseInt(sheet.secondary.calm.racial) + parseInt(sheet.secondary.calm.advance) );
  sheet.secondary.training.first.total = String( parseInt(sheet.secondary.training.first.base) + parseInt(sheet.secondary.training.first.racial) + parseInt(sheet.secondary.training.first.advance) );

  //Habilities characteristic update

  sheet.habilities.artistics.disguise.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.athletics.acrobatics.characteristic = sheet.primary.dextery.total;
  sheet.habilities.athletics.balance.characteristic = sheet.primary.dextery.total;
  sheet.habilities.athletics.mount.characteristic = sheet.primary.dextery.total;
  sheet.habilities.athletics.swim.characteristic = sheet.primary.strenght.total;
  sheet.habilities.athletics.jump.characteristic = sheet.primary.strenght.total;
  sheet.habilities.athletics.climb.characteristic = sheet.primary.strenght.total;
  sheet.habilities.educationals.arcana.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.crafts.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.cosmology.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.geography.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.history.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.medicine.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.nature.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.educationals.religion.characteristic = sheet.primary.inteligence.total;
  sheet.habilities.general.sight.characteristic = sheet.primary.wisdom.total;
  sheet.habilities.general.listen.characteristic = sheet.primary.wisdom.total;
  sheet.habilities.general.intuition.characteristic = sheet.primary.wisdom.total;
  sheet.habilities.general.smell.characteristic = sheet.primary.wisdom.total;
  sheet.habilities.general.survival.characteristic = sheet.primary.wisdom.total;
  sheet.habilities.stealth.deactivate.characteristic = sheet.primary.dextery.total;
  sheet.habilities.stealth.escapism.characteristic = sheet.primary.dextery.total;
  sheet.habilities.stealth.hide.characteristic = sheet.primary.dextery.total;
  sheet.habilities.stealth.hand_play.characteristic = sheet.primary.dextery.total;
  sheet.habilities.stealth.stealth_move.characteristic = sheet.primary.dextery.total;
  sheet.habilities.stealth.rope_use.characteristic = sheet.primary.dextery.total;
  sheet.habilities.socials.diplomacy.characteristic = sheet.primary.charisma.total;
  sheet.habilities.socials.deceive.characteristic = sheet.primary.charisma.total;
  sheet.habilities.socials.intimidation.characteristic = sheet.primary.charisma.total;
  sheet.habilities.socials.gather_info.characteristic = sheet.primary.charisma.total;

  //Habilities totals calculation
  sheet.habilities.artistics.disguise.total = String( parseInt(sheet.habilities.artistics.disguise.characteristic) + parseInt(sheet.habilities.artistics.disguise.advance) + parseInt(sheet.habilities.artistics.disguise.other) );
  sheet.habilities.athletics.acrobatics.total = String( parseInt(sheet.habilities.athletics.acrobatics.characteristic) + parseInt(sheet.habilities.athletics.acrobatics.advance) + parseInt(sheet.habilities.athletics.acrobatics.other) );
  sheet.habilities.athletics.balance.total = String( parseInt(sheet.habilities.athletics.balance.characteristic) + parseInt(sheet.habilities.athletics.balance.advance) + parseInt(sheet.habilities.athletics.balance.other) );
  sheet.habilities.athletics.mount.total = String( parseInt(sheet.habilities.athletics.mount.characteristic) + parseInt(sheet.habilities.athletics.mount.advance) + parseInt(sheet.habilities.athletics.mount.other) );
  sheet.habilities.athletics.swim.total = String( parseInt(sheet.habilities.athletics.swim.characteristic) + parseInt(sheet.habilities.athletics.swim.advance) + parseInt(sheet.habilities.athletics.swim.other) );
  sheet.habilities.athletics.jump.total = String( parseInt(sheet.habilities.athletics.jump.characteristic) + parseInt(sheet.habilities.athletics.jump.advance) + parseInt(sheet.habilities.athletics.jump.other) );
  sheet.habilities.athletics.climb.total = String( parseInt(sheet.habilities.athletics.climb.characteristic) + parseInt(sheet.habilities.athletics.climb.advance) + parseInt(sheet.habilities.athletics.climb.other) );
  sheet.habilities.educationals.arcana.total = String( parseInt(sheet.habilities.educationals.arcana.characteristic) + parseInt(sheet.habilities.educationals.arcana.advance) + parseInt(sheet.habilities.educationals.arcana.other) );
  sheet.habilities.educationals.crafts.total = String( parseInt(sheet.habilities.educationals.crafts.characteristic) + parseInt(sheet.habilities.educationals.crafts.advance) + parseInt(sheet.habilities.educationals.crafts.other) );
  sheet.habilities.educationals.cosmology.total = String( parseInt(sheet.habilities.educationals.cosmology.characteristic) + parseInt(sheet.habilities.educationals.cosmology.advance) + parseInt(sheet.habilities.educationals.cosmology.other) );
  sheet.habilities.educationals.geography.total = String( parseInt(sheet.habilities.educationals.geography.characteristic) + parseInt(sheet.habilities.educationals.geography.advance) + parseInt(sheet.habilities.educationals.geography.other) );
  sheet.habilities.educationals.history.total = String( parseInt(sheet.habilities.educationals.history.characteristic) + parseInt(sheet.habilities.educationals.history.advance) + parseInt(sheet.habilities.educationals.history.other) );
  sheet.habilities.educationals.medicine.total = String( parseInt(sheet.habilities.educationals.medicine.characteristic) + parseInt(sheet.habilities.educationals.medicine.advance) + parseInt(sheet.habilities.educationals.medicine.other) );
  sheet.habilities.educationals.nature.total = String( parseInt(sheet.habilities.educationals.nature.characteristic) + parseInt(sheet.habilities.educationals.nature.advance) + parseInt(sheet.habilities.educationals.nature.other) );
  sheet.habilities.educationals.religion.total = String( parseInt(sheet.habilities.educationals.religion.characteristic) + parseInt(sheet.habilities.educationals.religion.advance) + parseInt(sheet.habilities.educationals.religion.other) );
  sheet.habilities.general.sight.total = String( parseInt(sheet.habilities.general.sight.characteristic) + parseInt(sheet.habilities.general.sight.advance) + parseInt(sheet.habilities.general.sight.other) );
  sheet.habilities.general.listen.total = String( parseInt(sheet.habilities.general.listen.characteristic) + parseInt(sheet.habilities.general.listen.advance) + parseInt(sheet.habilities.general.listen.other) );
  sheet.habilities.general.intuition.total = String( parseInt(sheet.habilities.general.intuition.characteristic) + parseInt(sheet.habilities.general.intuition.advance) + parseInt(sheet.habilities.general.intuition.other) );
  sheet.habilities.general.smell.total = String( parseInt(sheet.habilities.general.smell.characteristic) + parseInt(sheet.habilities.general.smell.advance) + parseInt(sheet.habilities.general.smell.other) );
  sheet.habilities.general.survival.total = String( parseInt(sheet.habilities.general.survival.characteristic) + parseInt(sheet.habilities.general.survival.advance) + parseInt(sheet.habilities.general.survival.other) );
  sheet.habilities.stealth.deactivate.total = String( parseInt(sheet.habilities.stealth.deactivate.characteristic) + parseInt(sheet.habilities.stealth.deactivate.advance) + parseInt(sheet.habilities.stealth.deactivate.other) );
  sheet.habilities.stealth.escapism.total = String( parseInt(sheet.habilities.stealth.escapism.characteristic) + parseInt(sheet.habilities.stealth.escapism.advance) + parseInt(sheet.habilities.stealth.escapism.other) );
  sheet.habilities.stealth.hide.total = String( parseInt(sheet.habilities.stealth.hide.characteristic) + parseInt(sheet.habilities.stealth.hide.advance) + parseInt(sheet.habilities.stealth.hide.other) );
  sheet.habilities.stealth.hand_play.total = String( parseInt(sheet.habilities.stealth.hand_play.characteristic) + parseInt(sheet.habilities.stealth.hand_play.advance) + parseInt(sheet.habilities.stealth.hand_play.other) );
  sheet.habilities.stealth.stealth_move.total = String( parseInt(sheet.habilities.stealth.stealth_move.characteristic) + parseInt(sheet.habilities.stealth.stealth_move.advance) + parseInt(sheet.habilities.stealth.stealth_move.other) );
  sheet.habilities.stealth.rope_use.total = String( parseInt(sheet.habilities.stealth.rope_use.characteristic) + parseInt(sheet.habilities.stealth.rope_use.advance) + parseInt(sheet.habilities.stealth.rope_use.other) );
  sheet.habilities.socials.diplomacy.total = String( parseInt(sheet.habilities.socials.diplomacy.characteristic) + parseInt(sheet.habilities.socials.diplomacy.advance) + parseInt(sheet.habilities.socials.diplomacy.other) );
  sheet.habilities.socials.deceive.total = String( parseInt(sheet.habilities.socials.deceive.characteristic) + parseInt(sheet.habilities.socials.deceive.advance) + parseInt(sheet.habilities.socials.deceive.other) );
  sheet.habilities.socials.intimidation.total = String( parseInt(sheet.habilities.socials.intimidation.characteristic) + parseInt(sheet.habilities.socials.intimidation.advance) + parseInt(sheet.habilities.socials.intimidation.other) );
  sheet.habilities.socials.gather_info.total = String( parseInt(sheet.habilities.socials.gather_info.characteristic) + parseInt(sheet.habilities.socials.gather_info.advance) + parseInt(sheet.habilities.socials.gather_info.other) );

  return sheet;
}

function calculateResources(sheet){

  sheet.resources.life = String(parseInt(sheet.primary.constitution.total) + parseInt(sheet.secondary.endurance.total));
  
  if ( sheet.background === "fighter"){
    sheet.resources.energy = String(parseInt(sheet.secondary.endurance.total) * 2);
  }
  else{
    sheet.resources.energy = String(parseInt(Math.floor(parseFloat(sheet.secondary.endurance.total) * 1,5)));
  }
  
  sheet.resources.spirit = String(parseInt(sheet.resources.spirit) + parseInt(sheet.primary.wisdom.total) + parseInt(sheet.secondary.calm.total));
  
  if ( sheet.background === "studious"){
    sheet.resources.mana = String(parseInt(sheet.secondary.magic.total) * 2);
  }
  else{
    sheet.resources.mana = String(parseInt(Math.floor(parseFloat(sheet.secondary.magic.total) * 1,5)));
  }

  sheet.resources.reaction = String(parseInt(sheet.primary.dextery.total) + parseInt(sheet.primary.inteligence.total));
  
  sheet.resources.dodge = String(parseInt(sheet.resources.reaction) + parseInt(Math.floor(parseFloat(sheet.habilities.athletics.acrobatics.total) / 4)));

  sheet.resources.bleeding = sheet.primary.constitution.total;

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
  calculateTotals(sheet);
  calculateResources(sheet);

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

