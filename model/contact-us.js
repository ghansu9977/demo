import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    surname: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    message: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
