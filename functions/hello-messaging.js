exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  twiml.message('Hello Cloud Asia Expo');
  callback(null, twiml);
};
