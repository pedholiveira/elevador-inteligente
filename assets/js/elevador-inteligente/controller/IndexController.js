(function() {
    angular.module('ElevadorInteligente').controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$interval', 'Elevador'];

    function IndexController($scope, $interval, Elevador) {
        var vm = this;

        vm.numeroAndares = 10;
        vm.elevadores = [new Elevador()];
        vm.andarSelecionado = [];

        vm.obterAndares = obterAndares;
        vm.obterNumeroIteracoes = obterNumeroIteracoes;
        vm.chamarElevador = chamarElevador;

        function chamarElevador(andarAtual, andarDestino) {
            var elevadorDisponivel;
            do {
                elevadorDisponivel = obterElevadorDisponivel(andarAtual, andarDestino);
            } while(!elevadorDisponivel);

            elevadorDisponivel.andaresBusca.push(andarAtual);
            elevadorDisponivel.andaresDestino.push(andarDestino);

            executarElevador(elevadorDisponivel);
        }

        function executarElevador(elevador) {
            var execucao = $interval(function() {
                var caminho = []
                if(elevador.andaresBusca.length > 0) {
                    caminho = elevador.andaresBusca;
                } else if(elevador.andaresDestino > 0) {
                    caminho = elevador.andaresDestino;
                } else {
                    elevador.estado = "PARADO";
                    $interval.cancel(execucao);
                }

                if(elevador.localizacao < caminho[0]) {
                    elevador.localizacao++;
                } else if(elevador.localizacao > caminho[0]) {
                    elevador.localizacao--;
                }

                if(elevador.localizacao == caminho[0]) {
                    caminho.shift();
                }
            }, 1000);
        }

        function obterElevadorDisponivel(andarAtual, andarDestino) {
            for(var i in vm.elevadores) {
                var elevador = vm.elevadores[i];
                if(elevador.estado == "PARADO") {
                    elevador.estado = "BUSCANDO";
                    return elevador;
                }
            }
        }

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

        function sleep(milissegundos) {
            var data = new Date();
            var dataCorrente = null;

            do {
                dataCorrente = new Date();
            } while(dataCorrente - data < milissegundos);
        }
    }
})();