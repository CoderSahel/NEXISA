const Contact = require('../models/Contact');

exports.createContact = async (req,res) => {
    try {
        const {fullName, email, subject, message} = req.body;
        if(!fullName || !email || !subject || !message){
            return res.status(400).json({
                success:false,
                message:'Fill the reqd credentials'
            })
        }

        const contact = await Contact.create({
            fullName,
            email,
            subject,
            message,
        })

        return res.status(200).json({
            success:true,
            contact,
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