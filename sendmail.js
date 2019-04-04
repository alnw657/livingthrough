


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'livingthroughteam@gmail.com',
           pass: 'LvTh2018'
       }
   });

   const mailOptions = {
    from: 'sender@email.com', // sender address
    to: 'alnw657@gmail.com', // list of receivers
    subject: 'My Safety Plan', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

 