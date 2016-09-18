import {InnerInformation} from './innerInformation';

export class BaseResponseModel {
    
    public Message : string;
    public Details : Array<InnerInformation>; 

    constructor(message:string);
    constructor(message:string,details?:Array<InnerInformation>);
    constructor(message?:string,details?:Array<InnerInformation>){
        this.Message = message;
        this.Details = details;  
    }
    
}