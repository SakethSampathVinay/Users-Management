import mongoose from "mongoose";

const connecToDB = async () => {
  const url =
    "mongodb+srv://sakethsampath2006:7093023759@cluster0.cvgjp.mongodb.net/";
  mongoose
    .connect(url)
    .then(() => console.log("Database Connection is Successfull"))
    .catch((error) => console.log(error));
};



export default connecToDB;