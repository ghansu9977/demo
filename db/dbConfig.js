import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/realStateListing")
.then(()=>{
    console.log("Database connected....");
}).catch(err=>{
    console.log("connection failed....")
});

export default mongoose.connection;