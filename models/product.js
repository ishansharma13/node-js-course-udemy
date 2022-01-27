const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'..','data','products.json');
const getFileContents = (callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if (!err){
            callback(JSON.parse(data));
        }else{
            callback([]);
        }
    })
}

module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        getFileContents(products =>{
            products.push(this);
            fs.writeFile(filePath,JSON.stringify(products),err=>{
                console.log(err);
            });
        })
    }
    static fetchAll(callback){
        return getFileContents(callback);
    }
}