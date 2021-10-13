exports.handler = function (context, event, callback) {

/*
 * --------------------------------------------------------------------------------
 * sends SMS to thirtd party
 *
 * event.phoneNumber - phone number to send SMS to
 * event.patient - name of patient to use in ths message
 *
 * --------------------------------------------------------------------------------
 */

  const twilioClient = context.getTwilioClient();
    twilioClient.messages
      .create({
        to: event.phoneNumber,
        from: context.TWILIO_FROM_PHONE,
        body: `${event.patient} has invited you to join their health visit at ${event.visitUrl}`,
      })
      .then(function () {
        return callback(null,"Sent");
      })
      .catch(function (err) {
        return callback(err);
      });

};
