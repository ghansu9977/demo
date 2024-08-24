import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: {type:String,required:true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  contactInfo: { type: String, required: true },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
