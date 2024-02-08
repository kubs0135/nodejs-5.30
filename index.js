// // const http=require("http");

// // http.createServer((req,res)=>
// //     {
// //         res.writeHead(200, { 'Content-Type': 'application/json' });
// //         res.end(JSON.stringify({
// //           data: 'Hello World!',
// //         }));
// //       }).listen(8000);

// //     console.log("application is running");

//     //fs read hello.txt,os =>ram herne

//     const os=require("os");
//     const totalRam=os.totalmem();
//     console.log(`Ram storage of my laptop is:${totalRam/(1024*1024*1024)}`);

//     const fs = require('fs');
//     const result=fs.readFileSync("./hello.txt").toString();
//     console.log(result);

//     //built in nodejs module
//     //http
//     //fs
//     //os

//     //

// const {converter}=require("./library");
// const result=converter(5000);
// console.log(result);

const textParser=require("./modules/textParser");


const result=textParser.properCase("CASL Roles with persisted permission in Nestjs");

console.log({result});

const res=textParser.slugify("CASL Roles with persisted permission in Nestjs");
console.log({res});

const slug = require('slug')
const print = console.log.bind(console, '>');

print(slug('CASL Roles with persisted permission in Nestjs'));

const resEm=textParser.emailValidator("K@gmail.com");
console.log({resEm});

const isEmail = require('nice-is-email')
console.log(isEmail('foo@bar.com'));
console.log(isEmail('@bar'));





const resDis=textParser.descriptionGenerator("kuber is a student of ncc college");
console.log({resDis});

const QRCode = require('qrcode');
QRCode.toString('www.facebook.com/kuberkathayat123',{type:'terminal'}, function (err, url) {
    console.log(url)
  });

  const CC = require('currency-converter-lt');
  let currencyConverter = new CC(10);
  console.log(currencyConverter);

