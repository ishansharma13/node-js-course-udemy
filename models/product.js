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
    constructor({title,imageUrl,price,description}){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
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