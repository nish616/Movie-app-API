const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@cluster0.ll1mc.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex : true })
.then(() => {
    console.log("Database authenticated and connected");
})
.catch((err) => {
    if(err) throw err;
});