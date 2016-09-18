import {DataResponseModel} from './data.response.model';
export class InnerInformation{    
    public Field : string;
    private Messages : Array<string>;   
    constructor(field:string,messages:Array<string>)
    {
        this.Field = field;
        this.Messages = messages;            
    }   
}