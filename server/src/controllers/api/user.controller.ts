import * as express from 'express';
import { DataResponseModel } from '../../common/models/response/data.response.model';
export class UserController{
     public LoggedInUser(req:express.Request, res:express.Response){
         var loggedInUser: any = { username: "ram", displayName: "Ramachandran G" };
         var response: DataResponseModel<any> = new DataResponseModel(loggedInUser, { loggedIn: true }, "Successfully retieved Logged In user.");
         res.send(response);
    }
}