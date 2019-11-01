import { Component, OnInit } from '@angular/core';
import {ITodo, TodoService} from '../todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  inputControl = new FormControl();
  observer = {
    next: (data) => {this.todoList = data},
    error: (error) => {console.log(error)},
    complete: () => {console.log('complete')}
  };

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todoList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  toggleTodo(i) {}
  addTodo() {}
  deleteTodo(i) {}

}

