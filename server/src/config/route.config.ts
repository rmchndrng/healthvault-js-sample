import * as express from 'express';
import * as core from "express-serve-static-core";
import {DefaultController} from '../controllers/default.controller'
import {ApiRoutes} from './routes/api.routes';
export class RouteConfig{
    private _DefaultController:DefaultController;
    private _ApiRoutes:ApiRoutes;    
    constructor(){
        this._DefaultController = new DefaultController();
        this._ApiRoutes = new ApiRoutes();        
    }
    public RegisterRoutes(router:core.Router){
        this._ApiRoutes.RegisterRoutes(router);
        router.get('*',this._DefaultController.Index);                
    }
}