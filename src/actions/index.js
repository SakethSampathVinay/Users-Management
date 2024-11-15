"use server";
import connecToDB from "@/database";
import User from "@/models/user";

// Adjust the path according to your project structure


// add new user
// fetch user action 
// edit a user action
// delete a user action


async function AddNewUserAction(formData) {
    await connecToDB();
    try{
        // validate data using joi/ or other packages also you can use
        const newlyCreatedUser = await User.create(formData);
        if(newlyCreatedUser) {
            return {
                success: true,
                message: "User Added Successfully"
            }
        } else{
            return {
                success: false,
                message: "Something Error Occurred! Please try again."
            }
        }
        
    }catch(error) {
        console.log(error)
        return {
            success: false,
            message: "Something Error Occurred! Please try again."
        }
        
    }
}


export default AddNewUserAction;