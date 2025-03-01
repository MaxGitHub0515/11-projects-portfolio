

const messages = {
    required: "This field is required",
    // User Validation Messages
    User: {
        uname: {
            minLength: "Username must be at least 6 characters long",
            maxLength: "Username must not exceed 30 characters",
            unique: "This username is already taken",
        },
        email: {
            invalid: "Please provide a valid email",
            unique: "This email is already registered"
        },
        pwd: {
        minLength: "Password must be at least 8 characters long",
        maxLength: "Password must not exceed 64 characters",
        }
    },
    Exprenses: {
        amount: {
            min: "Amount must be at least 0.01",
        },
        note:{
            maxLength: "Note must not exceed 200 characters"
        }
        
    }

    
}
export default messages


