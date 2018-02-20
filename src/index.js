import { observable, computed, autorun, asReference, action, reaction, toJS } from "mobx";
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
    //   console.log("Todos As Flat:", toJS(this.todosAsFlat));
    // });

    // autorun(() => {
    //   console.log("Object As Normal:", this.objNormal);
    // });

    // autorun(() => {
    //   console.log("Object As Structure:", toJS(this.objAsStructure));
    // });

    autorun(() => {
      console.log("Object As Map:", toJS(this.objAsMap));
    });
  }

  @observable todos = ['White', 'Black'];
  @observable.ref todosAsReference = ['White', 'Black'];
  @observable.shallow todosAsFlat = ['White', 'Black'];

  obj1 = { name: 'Dhruv', lastname: 'Kapasi', 'address': { city: 'Delhi' } };
  @observable objNormal = { name: 'Dhruv', lastname: 'Kapasi', 'address': { city: 'Delhi' } };
  @observable.struct objAsStructure = this.obj1;
  objAsMap = observable.map({ name: 'Dhruv', lastname: 'Kapasi' });

  modify() {
    this.todos[1] = "Blue";
    this.todos[0] = "Red";
    this.todos.shift();
    this.todos = ["Gray"];
    this.todos.push("Green");
    this.todos = ["Purple", []]
    this.todos[1][0] = ["Violet"]

    this.todosAsReference[1] = "Blue";
    this.todosAsReference[0] = "Red";
    this.todosAsReference.shift();
    this.todosAsReference = ["Gray"]
    this.todosAsReference.push("Green");

    this.todosAsFlat[1] = "Blue";
    this.todosAsFlat[0] = "Red";
    this.todosAsFlat.shift();
    this.todosAsFlat = ["Gray"]
    this.todosAsFlat = ["Purple", []]
    this.todosAsFlat[1][0] = ["Violet"]

    this.objAsStructure = { name: 'Dhruv', lastname: 'Kapasi', 'address': { city: 'New York' } };

    this.objAsMap.work = { name: 'kpmg', location: 'gurgaon' };
    this.objAsMap.work.location = 'noida';

    this.objNormal.work = { name: 'kpmg', location: 'gurgaon' };
    this.objNormal.work.location = 'noida';
    this.objNormal.name = 'Lpika'
  }
}

const storeObj = new Store();
storeObj.modify();
