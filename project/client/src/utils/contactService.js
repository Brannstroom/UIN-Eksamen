import client from "./client"

export const createContact = async (FormName, FormEmail, FormNumber, FormTip) =>{
    try {
        const response = await client.create({_type: 'Form', FormName, FormEmail, FormNumber, FormTip})
        console.log(response)
    } catch (error) {
        throw new Error(error);
    }
}