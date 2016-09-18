import { BaseResponseModel } from './base.response.model'
import { InnerInformation } from './innerInformation.ts'
import { ErrorInformation } from './errorInformation.ts'
export class ErrorResponseModel extends BaseResponseModel {
    public Error: ErrorInformation;  
    constructor(message: string);
    constructor(message: string, details?: Array<InnerInformation>);
    constructor(message: string, details?: Array<InnerInformation>, code?: string);
    constructor(message: string, details?: Array<InnerInformation>, code?: string, errorId?: string);
    constructor(message?: string, details?: Array<InnerInformation>, code?: string, errorId?: string) {
        super(message);
        var errorInformation = new ErrorInformation(message, details, code, errorId);
        this.Error = errorInformation;              
    }
}   