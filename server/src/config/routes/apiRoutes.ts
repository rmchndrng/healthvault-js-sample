import * as express from 'express';
import * as core from "express-serve-static-core";

import {UserRoutes} from './api/userRoutes';

export class ApiRoutes {    
    private _router:core.Router;
    private _userRoutes:UserRoutes;

    constructor(){
        this._userRoutes = new UserRoutes();        
        this._router = express.Router();
    }

    registerRoutes(router:core.Router){        
        this._userRoutes.registerRoutes(router);
    }
}