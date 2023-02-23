const express  = require("express");
const index    = express();
const mongoose = require("mongoose");
const cors     = require("cors");
const bcryptjs = require("bcryptjs")
const jwt      = require("jsonwebtoken");

require("./user");

index.use(express.json());
index.use(cors());


const mongoUrl = 'mongodb+srv://raksa:raksa3124224@cluster0.zhrgwrn.mongodb.net/?retryWrites=true&w=majority';
const JWT_SELECT = 'dkasfdlsjafldhsafkjh()fha2345978[]sdfkjshasdafdswer';

mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connect to DB Success");
}).catch(e=>{
    console.log(e);
})


const user = mongoose.model("userInfo");

index.post("/register", async (req,res)=>{
    const {username, password, email} = req.body;
    const encryptPassword = await bcryptjs.hash(password,10);
    try{
        const oldUser = await user.findOne({email});
        if(oldUser){
          return res.send({error: "User Exists"})
        }
        await user.create({
            username: username,
            email: email,
            password: encryptPassword
        });
        res.send({status: "OK"})
    }
    catch(err){
        res.send({status: "error"})
    }
})
//Create Login

index.post("/login", async(req,res)=>{
    const {username,password} = req.body;
    const checkUser = await user.findOne({username});
    //validate user exits ot not
    if(!checkUser){
        return res.json({error: "User Not Fonud"});
    }
    if(await bcryptjs.compare(password,checkUser.password)){
        const token = jwt.sign({username: checkUser.username}, JWT_SELECT);
        if(res.status(201)){
            return res.json({status: "OK", data: token});
        } else{
            return res.json({error: "Error"});
        }
    }
    res.json({status: "error" ,error: "Invalid Password"})
});

index.post("/userData", async(req,res)=>{
    const {token} = req.body;
    try{
        const userData = jwt.verify(token, JWT_SELECT);
        console.log(userData);
        const username = userData.username;
        user.findOne({username: username}).then((data)=>{
            res.send({status: "OK",data: data});
        }).catch((err)=>{
            res.send({status: "error", data: err});
        })
    }
    catch(err){
        console.log("Login Faild");
    }
});


index.listen(5000, ()=>{
    console.log("sever is start");
});