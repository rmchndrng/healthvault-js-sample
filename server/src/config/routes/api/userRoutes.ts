import * as express from 'express';
import * as core from "express-serve-static-core";
import { UserController } from '../../../controllers/api/userController';
export class UserRoutes {
    private _UserController:UserController;
    private _router:core.Router;
    constructor(){
        this._UserController = new UserController();
        this._router = express.Router();
    }
    public registerRoutes(router:core.Router){
        router.get("/api/user/isLoggedIn",this._UserController.isLoggedIn);
    }
}