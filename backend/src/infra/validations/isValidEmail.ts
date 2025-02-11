import emailValidator from 'node-email-verifier';

export async function isValidEmail(email: string){

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){

        return false
    }

   const isValid = await emailValidator(email, {checkMx: true})
    return isValid
}