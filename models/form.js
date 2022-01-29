//Requiring mongoose package
const mongoose = require("mongoose");
  
// Schema
const formSchema=new mongoose.Schema({
    wordsToString: {
        type: Array,
        required: true,
    }
});
  
module.exports=mongoose.model("Form", formSchema);