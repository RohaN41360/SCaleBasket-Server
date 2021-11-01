const mongoose = require('mongoose');
// const DB='mongodb+srv://rohanrpawar:rohanrpawar@cluster0.t5bum.mongodb.net/ecommerce?retryWrites=true&w=majority';
const DB = process.env.DATABASE

mongoose.connect(DB)
.then(()=>{
    console.log("connected to the database")
}).catch(()=>{
    console.log("Could not Connect")
})