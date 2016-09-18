import { InnerInformation } from './innerInformation';

export class ErrorInformation {
    public Code: string;
    public Message: string;
    public Details: Array<InnerInformation>;    
    public ErrorId: string;
    constructor(message: string);
    constructor(message: string, details?: Array<InnerInformation>);
    constructor(message: string, details?: Array<InnerInformation>, code?: string);
    constructor(message: string, details?: Array<InnerInformation>, code?: string, errorId?: string); 
    constructor(message?: string, details?: Array<InnerInformation>, code?: string, errorId?: string) {
        this.Message = message;
        this.Details = details;
        this.Code = code;
        this.ErrorId = errorId;
    }
}