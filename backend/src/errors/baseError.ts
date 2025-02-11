
class BaseError extends Error{
    extensions: {code: string}

    constructor(message: string , extensions: {code: string}){
        super(message)
        this.extensions = extensions
    }
}

class NotFound extends BaseError{

    message: string
    
    constructor(message: string){
        super(message, {code: "NOT_FOUND"})
    }
}

class InvalidEmail extends BaseError{
    message: string

    constructor(message: string){
        super(message, {code: "INVALID_EMAIL"})
    }
}

class InsufficientCharacters extends BaseError{
    message: string

    constructor(message: string){
        super(message, {code: "INSUFFICIENT_CHARACTERS"})
    }
}