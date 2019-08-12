// import BN from "bignumber.js";
import { computed, observable } from "mobx";
// import { fromStream, IStreamListener } from "mobx-utils";

export interface Person {
  name: string;
  tasks: Array<number>;
}

export class Todo {
  @observable id;
  @observable title;
  @observable assignee;
  @observable complete;

  constructor(title: string) {
    this.id = Date.now();
    this.title = title;
    this.complete = false;
  }

  public assign(person: Person) {
    this.assignee = person;
  }
}

export class TodoList {
  @observable todos: Array<Todo> = [];
  @observable filter = "";
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.title));
  }

  createTodo = title => this.todos.push(new Todo(title));

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    this.todos = incompleteTodos;
  };
}
