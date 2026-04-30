const User = require('../models/register')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')

exports.register = async (req, res) => {
    try {
        const { usern, email, password } = req.body;
        if (!usern || !email || !password) return res.status(400).json("Please fill all the fields");
        const userExists = await User.findOne({ email });
        if (!email.includes("@")) return res.status(400).json("Invalid email");
        if (password.length < 6) return res.status(400).json("Password must be at least 6 characters");
        if (userExists) return res.status(400).json("User already exists");
        const hashedpassword = await bcrypt.hash(password, 10);
        const euser = await User.create({ usern, email, password :hashedpassword });
        res.json({
            message: "User registered successfully",
            name: euser.usern,
            email: euser.email,
            token: generateToken(euser),
            euser
        });
    } catch (error) {
        console.log(error);
    }
}

exports.login = async(req , res)=>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json("Invalid credentials");
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json("Invalid credentials");

        res.json({
            token: generateToken(user),
            user
        });
    }
    catch(error){
        console.log(error);
    }
}