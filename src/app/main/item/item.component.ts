///<reference path="./../todos.controller.ts"/>

namespace TodosModule.ItemComponent {

    export class ItemComponent implements ng.IComponentOptions {
        public templateUrl: string = "app/main/item/item.component.html";
        public controller = TodosModule.TodosController.TodosController;
        public css = 'app/main/item/item.component.css';
        public bindings = {
            data: '='
        };
    }

}

angular.module(TodosModule.DI_MODULE_NAME)
    .component("itemTodo", new TodosModule.ItemComponent.ItemComponent());