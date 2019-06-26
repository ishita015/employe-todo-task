import { Component, OnInit } from '@angular/core';
import { TodoAddVo } from './../models/todo-add.models';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  todoAddVo: TodoAddVo;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    if (this.loginForm.value.email == 'admin' && this.loginForm.value.password == '123456') {
      this.router.navigate(['/list']);
    }
  }

}
