'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey men, you make it work!!!',
    }),
  };

  callback(null, response);
};

module.exports.getTest = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey men, you make it work!!!',
    }),
  };

  callback(null, response);
};

module.exports.postTest = (event, context, callback) => {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var first_name = event.body.first_name;
  if (typeof first_name !== 'string') {
    console.error('Validation Failed');
    callback(new Error('First name is mandatory'));
    return;
  }

  var last_name = event.body.last_name;
  if (typeof last_name !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Last name is mandatory.'));
    return;
  }

  // create a resonse
  var response = {
    statusCode: 200,
    body: JSON.stringify({ FirstName: capitalize(first_name), LastName: capitalize(last_name) }),
  }
  callback(null, response);

};
