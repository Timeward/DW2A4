// Criação do módulo App (Angular)
// ngRoute é uma dependência que permite a implementação da funcionalidade roteamento
// Também facilita a configuração e o gerenciamento das rotas do aplicativo
let app = angular.module("App", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
            
        })
        .when("/hex", {
            templateUrl: "templates/p1.html"
        })
        .when("/crossmult", {
            templateUrl: "templates/p2.html"
        })
        .when("/elipse", {
            templateUrl: "templates/p3.html"
        })

        .otherwise({redirectTo: "/"})
})
