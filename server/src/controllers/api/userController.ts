import * as express from 'express';
export class UserController{
     public isLoggedIn(req:express.Request, res:express.Response){
        res.send("Testing");
    }
}