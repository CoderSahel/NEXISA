const Register = require('../models/Register');

exports.createRegister = async (req,res) => {
    try {
        const { fullName, department, email, yop, domain, driveLink } = req.body;
        if(!fullName || !email || !department || !yop || !domain || !driveLink){
            return res.status(400).json({
                success:false,
                message:'Fill the reqd credentials'
            })
        }

        const existUser = await Register.findOne({ email });
        if(existUser){
            return res.status(400).json({
                success: false,
                message: "You can apply again after 90 days from last registered"
            })
        }

        const register = await Register.create({
            fullName,
            email,
            department,
            yop,
            domain,
            driveLink
        })

        return res.status(200).json({
            success:true,
            register,
            message:"Contact form api denied"
        })

    } catch (error) {
        console.log('Error ->', error);
        
        return res.status(500).json({
            success:false,
            message:"Server side Error"
        });
    }
}