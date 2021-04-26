import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly createdAt: string;
  readonly completed: boolean;
  readonly todoList: TodoList;
  readonly userId: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class TodoList {
  readonly id: string;
  readonly createdAt: string;
  readonly todos?: (Todo | null)[];
  constructor(init: ModelInit<TodoList>);
  static copyOf(source: TodoList, mutator: (draft: MutableModel<TodoList>) => MutableModel<TodoList> | void): TodoList;
}