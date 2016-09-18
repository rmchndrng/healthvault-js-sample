import * as express from 'express';
import * as core from "express-serve-static-core";
import { UserController } from '../../../controllers/api/user.controller';
export class UserRoutes {
    private _UserController:UserController;    
    constructor(){
        this._UserController = new UserController();        
    }
    public RegisterRoutes(router:core.Router){
        router.get("/api/user/loggedInUser",this._UserController.LoggedInUser);
    }
}