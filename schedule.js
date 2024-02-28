var nodemailer = require("nodemailer");

// var sub = document.getElementById("sub");

// sub.addEventListener("click", (e) => {
//   e.preventDefault();
//   alert("Your appointment is scheduled");
//   var fullname = document.getElementById("fullname");
//   var email = document.getElementById("email");
//   var phonenumber = document.getElementById("phonenumber");
//   var textarea = document.getElementById("textarea");

//   var date = document.getElementById("date");
//   var time = document.getElementById("time");
//   var reason = document.getElementById("reason");
//   var doctor = document.getElementById("doctor");

//   var detaile = {
//     fullname: fullname.value,
//     email: email.value,
//     phonenumber: phonenumber.value,
//     textarea: textarea.value,
//     date: date.value,
//     time: time.value,
//     reason: reason.value,
//     doctor: doctor.value,
//   };
//   console.log(detaile);
// });

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nishanth.kkps@gmail.com",
    pass: "gqti uabu kpkz lfmg",
  },
});
//navneeth.cs22@bmsce.ac.in
var mailOptions = {
  from: "nishanth.kkps@gmail.com",
  to: "nithinkoushik0616@gmail.com",
  subject: "Sending Email using Node.js",
  text: "hi nithin",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
