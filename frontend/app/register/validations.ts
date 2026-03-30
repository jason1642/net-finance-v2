const registerValidations = {
    first_name: {
        required: true,
        maxLength: 20,
        minLength: 2
    },
    last_name:{
        required: true, 
        maxLength: 20,
        minLength: 2
    },
    email: {
        required: true,
        pattern: /^\S+@\S+$/i
    },
    password: {
        required: true,
        minLength: 8,
        maxLength: 100,
    },
    confirm_password: {
        required: true,
        validate: (value: string, getValues: any) => value === getValues("password") || "Passwords do not match"
    }
}

export default registerValidations;