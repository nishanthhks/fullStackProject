import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var data;
var mailData;

app.use(bodyParser.urlencoded({ extended: true }));

function formData(req, res, next) {
  data = {
    fullname: req.body.fullname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    textarea: req.body.textarea,
    date: req.body.date,
    time: req.body.time,
    reason: req.body.reason,
    doctor: req.body.doctor,
  };

  mailData = `Full Name: ${req.body.fullname}
  Email:  ${req.body.email}
  Phone Number:  ${req.body.phonenumber}
  Message:  ${req.body.textarea}
  Date of Appointment:  ${req.body.date}
  Time of Appointment:  ${req.body.time}
  Reason for Appointment:  ${req.body.reason}
  Preferred Doctor:  ${req.body.doctor}
  `;

  next();
}
app.use(formData);

function main(mailData) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nishanth.kkps@gmail.com",
      pass: "gqti uabu kpkz lfmg",
    },
  });
  //navneeth.cs22@bmsce.ac.in
  //nithinkoushik0616@gmail.com
  var mailOptions = {
    from: "nishanth.kkps@gmail.com",
    to: data.email,
    subject: "Sending Email using Node.js",
    text: mailData,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/schedule.html");
});

app.post("/", (req, res) => {
  main(mailData);
  console.log(data);
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
