import mongoose from "mongoose";

const connecToDB = async () => {
  const url =
    "mongodb+srv://sakethsampath2006:<db_password>@cluster0.sczxd.mongodb.net/";
  mongoose
    .connect(url)
    .then(() => console.log("Database Connection is Successfull"))
    .catch((error) => console.log(error));
};



export default connecToDB;