import * as express from 'express'
import * as path from 'path';
import * as core from "express-serve-static-core";
import {DefaultController} from './controllers/default.controller';
import {RouteConfig} from './config/route.config';
export class App{
    private _App:express.Express;
    private _RouteConfig:RouteConfig;
    private _Router:core.Router;    
    constructor(){
        this._App = express();
        this._RouteConfig = new RouteConfig();
        this._Router = express.Router();        
    }
   
    public SetRoutes(){        
        this._App.use(express.static(path.resolve(__dirname,'../../client')));
        this._RouteConfig.RegisterRoutes(this._Router);
        this._App.get('*',this._Router);
    }

    public StartServer(){
        this._App.listen(5000, function () {
            console.log('Listening on port 5000!');
        });
    } 

     public Index(req:express.Request, res:express.Response){
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    }
}

