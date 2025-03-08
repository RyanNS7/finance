
class BaseError extends Error{
    extensions: {code: string}

    constructor(message: string , extensions: {code: string}){
        super(message)
        this.extensions = extensions
    }
}

export class NotFound extends BaseError{

    message: string
    
    constructor(message: string){
        super(message, {code: "NOT_FOUND"})
    }
}

export class InvalidEmail extends BaseError{
    message: string

    constructor(message: string){
        super(message, {code: "INVALID_EMAIL"})
    }
}

export class InsufficientCharacters extends BaseError{
    message: string

    constructor(message: string){
        super(message, {code: "INSUFFICIENT_CHARACTERS"})
    }
}

export class NumberError extends BaseError{
    message: string

    constructor(message: string){
        super(message, {code: "NUMBER_ERROR"})
    }
}