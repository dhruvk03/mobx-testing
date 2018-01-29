import { observable, computed, autorun, asReference, asFlat, asStructure, action, reaction } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";


class Store {
  constructor() {
    // autorun(() => {
    //   console.log("Todos:", this.todos
    //     .join(", ")
    //   );
    // });

    // autorun(() => {
    //   console.log("Todos As Reference:", this.todosAsReference);
    // });

    // autorun(() => {
    //   console.log("Todos As Flat:", this.todosAsFlat);
    // });

    autorun(() => {
      console.log("Object As Normal:", this.objNormal);
    });

    autorun(() => {
      console.log("Object As Structure:", this.objAsStructure);
    });
  }

  @observable todos = ['White', 'Black'];
  @observable todosAsReference = asReference(['White', 'Black']);
  @observable todosAsFlat = asFlat(['White', 'Black']);

  obj1 = { name: 'Dhruv', lastname: 'Kapasi' };
  @observable objNormal = { name: 'Dhruv', lastname: 'Kapasi' };
  @observable objAsStructure = asStructure(this.obj1);

  modify() {
    this.todos[1] = "Blue";
    this.todos[0] = "Red";
    this.todos.shift();
    this.todos = ["Gray"];
    this.todos.push("Green");

    this.todosAsReference[1] = "Blue";
    this.todosAsReference[0] = "Red";
    this.todosAsReference.shift();
    this.todosAsReference = ["Gray"]
    this.todosAsReference.push("Green");

    this.todosAsFlat[1] = "Blue";
    this.todosAsFlat[0] = "Red";
    this.todosAsFlat.shift();
    this.todosAsFlat = ["Gray"]
    this.todosAsFlat = ["Purple"]
    this.todosAsFlat = ["Violet"]
    //this.todosAsFlat.push("Green");

    this.objNormal = { car: 'BMW' };
    this.objNormal.name = 'Lipika';
    this.objAsStructure = { name: 'Dharmesh', lastname: 'Kapasi' };
  }
}

const storeObj = new Store();
storeObj.modify();
