import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _checkedServer: boolean = false;
  private _isLoggedIn: boolean = false;
  get isLoggedIn(): boolean {
    if (this._checkedServer) {
      return this._isLoggedIn;
    }
    else {
      //Call server api and set the flag
    }
  }

  constructor() {
  }

}
