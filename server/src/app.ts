import * as express from 'express'
import * as path from 'path';
export class App{
    private _App:express.Express;
    constructor(){
        this._App = express();
    }

    private _RenderIndex(req:express.Request, res:express.Response){
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    }
    public setRoutes(){
        this._App.use(express.static('../../client'));
        //All get requests will be served the Angular application. Once it is loaded, Angular router will router to the specific page.
        this._App.get('*',this._RenderIndex)
    }

    public startServer(){
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    } 
}

