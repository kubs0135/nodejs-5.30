//slug
//properCase
//description generator
//email validation

const slugify=(sentence)=>{
    return sentence.replaceAll(" ","-").toLowerCase();
};



const properCase=(sentence)=>{
    return sentence.toLowerCase().split(" ").map((sentence)=>sentence.charAt(0).toUpperCase()+sentence.slice(1, sentence.length)).join(" ");

};

const descriptionGenerator=(sentence)=>{
    return sentence.slice(0,5)+"....";
};
//response:"kuber is a...""

const emailValidator=(email)=>{
    return email.toLowerCase().includes("@");    
};

module.exports={slugify,properCase,descriptionGenerator,emailValidator};