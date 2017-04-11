///<reference path="module.ts"/>

namespace Main {
    let s: string = " 2string";

    console.log(Test.test + s);

    let module = angular.module("mySuperAwesomeApp", ['angularCSS', 'mdl']);

    module.component("heros", {
        templateUrl: "template.html",
        css: 'style.css',
        controller: function herosController() {},
        controllerAs: "$ctrl"
    });

    angular
        .element(document)
        .ready( () => {
            angular.bootstrap(document, ["mySuperAwesomeApp"]);
        });

}


