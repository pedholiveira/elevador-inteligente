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

          var subindo = andarAtual < andarDestino;
          var descendo = andarAtual > andarDestino;

          var execucao = $interval(function() {
            elevadorDisponivel = obterElevadorDisponivel(andarAtual, andarDestino);
            if (elevadorDisponivel) {
              if (subindo) {
                elevadorDisponivel.andaresBuscaSubindo.push(andarAtual);
                elevadorDisponivel.andaresDestinoSubindo.push(andarDestino);
              } else if (descendo) {
                elevadorDisponivel.andaresBuscaDescendo.push(andarAtual);
                elevadorDisponivel.andaresDestinoDescendo.push(andarDestino);
              }

              if (elevadorDisponivel.estado === "BUSCANDO") {
                executarElevador(elevadorDisponivel);
              }
              $interval.cancel(execucao);
            }
          }, 1000);

        }

        function executarElevador(elevador) {

          var execucao = $interval(function() {
              var caminho = []
              if(elevador.andaresBuscaSubindo.length > 0) {
                  caminho = elevador.andaresBuscaSubindo.sort(ordenacaoNumerica);
              } else if(elevador.andaresDestinoSubindo.length > 0) {
                  caminho = elevador.andaresDestinoSubindo.sort(ordenacaoNumerica);
              } else if(elevador.andaresBuscaDescendo.length > 0) {
                  caminho = elevador.andaresBuscaDescendo.sort(ordenacaoNumerica).reverse();
              } else if(elevador.andaresDestinoDescendo.length > 0) {
                  caminho = elevador.andaresDestinoDescendo.sort(ordenacaoNumerica).reverse();
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

          var subindo = andarAtual < andarDestino;
          var descendo = andarAtual > andarDestino;

          for(var i in vm.elevadores) {
              var elevador = vm.elevadores[i];
              if(elevador.estado == "PARADO") {
                elevador.estado = "BUSCANDO";
                return elevador;
              } else if (subindo && elevador.localizacao <= andarAtual) {
                elevador.estado = "MEIO";
                return elevador;
              } else if (descendo && elevador.localizacao >= andarAtual) {
                elevador.estado = "MEIO";
                return elevador;
              }
          }
        }

        $scope.$watch('vm.elevadores[0].andaresBuscaSubindo.length', function(novo, antigo) {
          if (novo < antigo) {
            vm.elevadores[0].quantidadePessoas++;
          }
        });

        $scope.$watch('vm.elevadores[0].andaresBuscaDescendo.length', function(novo, antigo) {
          if (novo < antigo) {
            vm.elevadores[0].quantidadePessoas++;
          }
        });

        $scope.$watch('vm.elevadores[0].andaresDestinoSubindo.length', function(novo, antigo) {
          if (novo < antigo) {
            vm.elevadores[0].quantidadePessoas--;
          }
        });

        $scope.$watch('vm.elevadores[0].andaresDestinoDescendo.length', function(novo, antigo) {
          if (novo < antigo) {
            vm.elevadores[0].quantidadePessoas--;
          }
        });

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

        function ordenacaoNumerica(a, b) {
          return a - b;
        }

    }
})();
