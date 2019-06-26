import { TodoAddVo } from './../models/todo-add.models';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const mockData = {
  "code": 0,
  "status": "SUCCESS",
  "body": [
    {
      "name": "wakeup",
      "email": "description",
      "mobileNo": "9087654321",
      "gender": "male"

    },

    {
      "name": "homework",
      "email": "description",
      "mobileNo": "9087654321",
      "gender": "female"
    },

    {
      "name": "sleep",
      "email": "description",
      "mobileNo": "9087654321",
      "gender": "female"
    }

  ],
  "successful": false
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  public getList(): Observable<any> {
    return Observable.create(observer => {
      observer.next(mockData);
      observer.complete();
    });
  }
}
