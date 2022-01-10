const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anzum20@navgurukul.org',
        pass: 'Anzum@123'
    }
});
  
let mailDetails = {
    from: 'anzum20@navgurukul.org',
    to: 'savitadevi20@navgurukul.org',
    subject: 'Test mail',
    text: 'Happy coding'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        throw err
        // console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});