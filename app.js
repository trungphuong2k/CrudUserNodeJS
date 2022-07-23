const express=require("express");
const mongoose=require("mongoose")

const port = 3000;
const app =express();

const UserRouter=require("./router/post")

console.log(app);
app.use('/user',UserRouter)
app.get("/")

mongoose.connect('mongodb+srv://phuongtt:52ENJ6d17s982jM5@cluster0.zfaso.mongodb.net/?retryWrites=true&w=majority',()=>{})
app.listen(3000);
