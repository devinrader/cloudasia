exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  twiml.message('Hello From Cloud Expo Asia');
  callback(null, twiml);
};
