///<reference path="app/todos.module.ts"/>
///<reference path="app/main/todos.component.ts"/>

namespace Main {

    export const DI_MODULE_NAME = "main.module";

    angular.module(Main.DI_MODULE_NAME, [TodosModule.DI_MODULE_NAME]);

    angular
        .element(document)
        .ready( () => {
            angular.bootstrap(document, [Main.DI_MODULE_NAME]);
        });

}


