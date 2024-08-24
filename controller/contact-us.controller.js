import Contact from "../model/contact-us.js";

export const createContact = async (req, res) => {
    const { userId, name, surname, email, message } = req.body;
    console.log(req.body)
    try {   
        const newContact = new Contact({ userId, name, surname, email, message });
        await newContact.save();
        return res.status(201).json({ msg: 'Contact created successfully', contact: newContact });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server error' });
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json(contacts);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server error' });
    }
};

export const getContactById = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        if (!contact) return res.status(404).json({ msg: 'Contact not found' });
        return res.status(200).json(contact);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server error' });
    }
};



export const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        if (!contact) return res.status(404).json({ msg: 'Contact not found' });

        await contact.remove();
        return res.status(200).json({ msg: 'Contact deleted successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server error' });
    }
};
