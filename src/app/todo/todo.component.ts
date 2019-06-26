import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo.service';
import { UiActionDto } from './../models/ui-action.models';
import { TodoAddVo } from './../models/todo-add.models';
import { MatTableDataSource } from "@angular/material";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public list: any = [];
  isAddCall: boolean = false;
  toDoList: any;
  displayedColumns = ['sequence', 'name', 'email', 'mobileNo', 'gender', 'action','reviews'];
  dataSource: MatTableDataSource<TodoAddVo>;
  taskToEdit: TodoAddVo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this._reset();
    this.todoService.getList().subscribe((response: any) => {
      response.body.forEach(value => {
        this.toDoList.push(value);
      });
      this.dataSource = new MatTableDataSource<TodoAddVo>(this.toDoList);
      let name = localStorage.getItem(('list'));
      this.dataSource = new MatTableDataSource<TodoAddVo>(JSON.parse(name));
    });
  }

  public deleteById(index: number) {
    this.toDoList.splice(index, 1);
    this.dataSource = new MatTableDataSource<TodoAddVo>(this.toDoList);
  }

  public editList(index: number, taskToEdit: TodoAddVo) {
    this.taskToEdit = taskToEdit;
    this.isAddCall = !this.isAddCall;
    // this.deleteById(index);
    this.toDoList.splice(index, 1, taskToEdit);
  }

  public addToList() {
    this.isAddCall = !this.isAddCall;
    this.taskToEdit = <TodoAddVo>{};
  }

  viewAction(event: TodoAddVo) {
    if (event.action == 'EDIT') {
      this.isAddCall = !this.isAddCall;
      if (event.data) {
        console.log(event.data.name != undefined);
        this.toDoList.push(event.data);
        this.dataSource = new MatTableDataSource<TodoAddVo>(this.toDoList);
      }
    }

    if (event.action == "EDIT_CANCEL") {
      this.isAddCall = !this.isAddCall;
    }
    console.log('xxxx xxxx xxxxx xxxzxxx event ', this.toDoList);
    const list = localStorage.setItem('list', JSON.stringify(this.toDoList));
    console.log("list", list);
  }

  private _reset() {
    this.toDoList = <Array<TodoAddVo>>[];
    localStorage.getItem('list');
  }
}
