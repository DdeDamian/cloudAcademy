'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey! Welcome to the characters handling app!',
    }),
  };

  callback(null, response);
};

