import * as express from 'express';
import * as core from "express-serve-static-core";

import {UserRoutes} from './api/user.routes';

export class ApiRoutes {       
    private _UserRoutes:UserRoutes;

    constructor(){
        this._UserRoutes = new UserRoutes();
    }

    RegisterRoutes(router:core.Router){        
        this._UserRoutes.RegisterRoutes(router);
    }
}