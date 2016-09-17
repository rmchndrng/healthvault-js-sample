import * as express from 'express';
import * as path from 'path';
export class DefaultController{
    public Index(req:express.Request, res:express.Response){
        res.sendFile(path.resolve(__dirname, '../../../client/index.html'));
    }
}