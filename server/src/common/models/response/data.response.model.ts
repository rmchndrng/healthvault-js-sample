import {BaseResponseModel} from './base.response.model';
import {IMetadata} from './metadata.interface';
import {InnerInformation} from './innerInformation';
export class DataResponseModel<T> extends BaseResponseModel {
    public Metadata: IMetadata; 
    public Data: T;
    
    constructor(data: T);
    constructor(data: T, metaData?: IMetadata);
    constructor(data: T, metaData?: IMetadata, message?: string);
    constructor(data: T, metaData?: IMetadata, message?: string, details?: Array<InnerInformation>);
    constructor(data?: T, metaData?: IMetadata, message?: string, details?: Array<InnerInformation>) {
        super(message);
        this.Data = data;
        this.Metadata = metaData;
        this.Details = details;         
    }
}