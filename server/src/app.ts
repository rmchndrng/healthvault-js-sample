import * as express from 'express'
import * as path from 'path';
import * as core from "express-serve-static-core";
import {DefaultController} from './controllers/defaultController';
import {RouteConfig} from './config/routeConfig';
export class App{
    private _App:express.Express;
    private _routeConfig:RouteConfig;
    private _router:core.Router;    
    constructor(){
        this._App = express();
        this._routeConfig = new RouteConfig();
        this._router = express.Router();        
    }
   
    public setRoutes(){        
        this._App.use(express.static(path.resolve(__dirname,'../../client')));
        this._routeConfig.registerRoutes(this._router);
        this._App.get('*',this._router);
    }

    public startServer(){
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    } 

     public Index(req:express.Request, res:express.Response){
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    }
}

