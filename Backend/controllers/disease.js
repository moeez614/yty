const Disease = require("../models/disease")

exports.getdisease = async (req, res) => {
    try {
        const { Covid19, Dengue, Malaria, Typhoid, Hepatitis, Influenza, Phnemonia, Chikenpox } = req.body;
        console.log("Success", Covid19, Dengue, Malaria, Typhoid, Hepatitis, Influenza, Phnemonia, Chikenpox);
        const disease = new Disease({ Covid19, Dengue, Malaria, Typhoid, Hepatitis, Influenza, Phnemonia, Chikenpox });
        await disease.save();
        res.send(disease);
    } catch (error) {
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getrecord = async (req, res) => {
    try {
        const disease = await Disease.find({})
            // .sort({ _id: -1 }).limit(1);
        res.json(disease);
    } catch (error) {
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.deleterecord = async (req ,res)=>{
    try{
        const id = req.params.id;
        await Disease.findByIdAndDelete(id);
        res.json({ message: "Record deleted successfully" });
    }
    catch(error){
        console.error(error, "bhai, error staff.jsx file ma ha!");
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.graph = async (req ,res)=>{
    try{
        const data = await Disease.find({})
        .sort({_id: -1}).limit(1);
        res.json(data);
    }
    catch(err){
        console.log({err: "error ha jan"});
        res.status(500).json({err: "error ha jan"});
    }
}