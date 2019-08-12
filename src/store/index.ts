import { Counter } from "./Counter";
import { TodoList } from "./TodoList";

export class Store {
  public count: Counter;
  public TodoList: TodoList;

  constructor() {
    this.count = new Counter();
    this.TodoList = new TodoList();
  }
}
