import * as express from 'express';
import * as core from "express-serve-static-core";
import {DefaultController} from '../controllers/defaultController'
import {ApiRoutes} from './routes/apiRoutes';
export class RouteConfig{
    private _defaultController:DefaultController;
    private _apiRoutes:ApiRoutes;    
    constructor(){
        this._defaultController = new DefaultController();
        this._apiRoutes = new ApiRoutes();        
    }
    public registerRoutes(router:core.Router){
        this._apiRoutes.registerRoutes(router);
        router.get('*',this._defaultController.Index);                
    }
}