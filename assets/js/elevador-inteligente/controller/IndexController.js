(function() {
    angular.module('ElevadorInteligente').controller('IndexController', IndexController);

    function IndexController() {
        var vm = this;

        vm.numeroAndares = 10;
        vm.numeroElevadores = 5;
        vm.andarSelecionado = [];

        vm.obterAndares = obterAndares;
        vm.obterNumeroIteracoes = obterNumeroIteracoes;

        function obterAndares() {
            var andares = [];
            for(var i = 1; i <= vm.numeroAndares; i++) {
                andares.push(i);
            }
            return andares;
        }

        function obterNumeroIteracoes(numero) {
            return new Array(numero);
        }
    }
})();