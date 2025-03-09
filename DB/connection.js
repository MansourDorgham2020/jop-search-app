import mongoose from "mongoose";

export const connection = async () => {
    return await mongoose.connect(process.env.DB_URI)
    .then(console.log('DB Connected Successfully'))
    .catch((err) => console.log(err, 'error from db connection'))
}