import { BaseError } from "./BaseError";

export class InvalidUserError extends BaseError {
    constructor(
        message: string = "Dados inválidos"
    ){
        super(400, message)
    }
}