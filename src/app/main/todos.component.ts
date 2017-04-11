///<reference path="./todos.controller.ts"/>
///<reference path="./item/item.component.ts"/>

namespace TodosComponent {

    export class TodosApp implements ng.IComponentOptions {
        public templateUrl: string = "app/main/todos.component.html";
        public controller = TodosModule.TodosController.TodosController;
        public css = 'app/main/todos.component.css';
        public bindings = {
            model: '='
        };
    }

}

angular.module(TodosModule.DI_MODULE_NAME)
    .component("todosApp", new TodosComponent.TodosApp());

