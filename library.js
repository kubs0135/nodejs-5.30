//write a js function that coverts m to km

const converter=(meter)=>meter/1000;

module.exports={converter};

//write a js module tat converts string to propercase
//write a js module that format number in coma
//eg.10000=>10,000
//write a js module that checks if the email is valid or noy4

const properCase=(string)=>{
    return string.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1, word.length)).join(" ");
    
};

module.exports={properCase};
