import { UiActionDto } from './../../models/ui-action.models';
import { TodoAddVo } from './../../models/todo-add.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public list: any = [];
  formGroup: FormGroup;
  todoAddVo: TodoAddVo;
  @Input('taskToEdit') taskToEdit: TodoAddVo;

  @Output('change') update = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this._init();
  }
  get name() {
    return this.formGroup.get('name');
  }
  get email() {
    return this.formGroup.get('email');
  }
  get mobileNo() {
    return this.formGroup.get('mobileNo');
  }
  get gender() {
    return this.formGroup.get('gender');
  }

  public saveList() {
    this._setList();
    console.log("data is:", this.formGroup.value);
    this.update.emit({
      action:'EDIT',
     data: this.formGroup.value
 
    });
  }

  cancel() {
    this.update.emit({
      action: "EDIT_CANCEL",
    })
  }

  private _init() {
    this.formGroup = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'mobileNo': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required)
    });

    if (this.taskToEdit) {
      this.formGroup.controls['name'].setValue(this.taskToEdit.name);
      this.formGroup.controls['email'].setValue(this.taskToEdit.email);
      this.formGroup.controls['mobileNo'].setValue(this.taskToEdit.mobileNo);
      this.formGroup.controls['gender'].setValue(this.taskToEdit.gender);
    }
  }

  private _setList() {
    this.todoAddVo = this.formGroup.value;
  }

}
