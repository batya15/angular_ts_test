namespace TodosModule.TodosController {

    const todos = [{
        caption : "task1",
        complite: false
    }];

    export class TodosController {
        private todos = todos;

        constructor() {


            console.log("Controller");
        }

        public add() {
            todos.push({
                caption: Math.random() + "",
                complite: true
            });
        }
    }

}