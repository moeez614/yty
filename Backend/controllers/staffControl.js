const Staff = require("../models/staff");

exports.createStaff = async(req , res) =>{
    try {
        const { Doctors, Nurses, Paramedics, Others } = req.body;
        console.log("Success", Doctors, Nurses, Paramedics, Others);
        const staff = new Staff({ Doctors, Nurses, Paramedics, Others });
        await staff.save();
        res.send(staff);
    } catch (error) {
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getstaff = async(req , res)=>{
    try{
        const staff = await Staff.find({})
        .sort({_id: -1}).limit(1);
        res.json(staff);
    }catch(error){
        console.error(error, "bhai, error");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.setRecord = async(req , res)=>{
    try{
        const record= await Staff.find({})
        res.json(record)
    }
    catch(err){
        console.log({err: "error ha jan"})
        res.status(500).json({err: "error ha jan"})
    }
}

exports.deleteRecord = async(req ,res)=>{
    try{
        const id = req.params.id;
        await Staff.findByIdAndDelete(id);
        res.json({ message: "Record deleted successfully" });
    }
    catch(error){
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.Gate = async(req ,res)=>{
    try{
        const data = await Staff.find({})
        .sort({_id: -1}).limit(1);
        res.json(data);
    }
    catch(error){
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}