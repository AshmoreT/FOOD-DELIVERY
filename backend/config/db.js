import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tatendamawere9972:ashmoremawere@cluster0.c9chumu.mongodb.net/FOOD-DELI').then(()=>console.log("DB Connected"));
}