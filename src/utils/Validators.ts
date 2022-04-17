const validateMaxLength = (value: string, maxLength: number) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else return undefined
}
const requiredField = () => {
        return 'Field is required'
}


export const validatePost = (value: any) => {
    let error;
    if (!value) {
        error = requiredField()
    } else if (value) {
        error = validateMaxLength(value, 100)
    }
    return error
}

export const validateMessage = (value: string) => {
    let error;
    if (!value) {
        error = requiredField()
    } else if (value){
        error = validateMaxLength(value, 100)
    }
    return error;
}

export const validateEmail = (value: string) => {
    let error;
    if (!value) {
        error = requiredField()
    }
    return error;
}

export const validatePassword = (value: string) => {
    let error;
    if (!value) {
        error = requiredField()
    }
    return error;
}