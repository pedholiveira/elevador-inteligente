(function() {
    angular.module('ElevadorInteligente').factory('Elevador', Factory);

    function Factory() {

        function Elevador() {
            this.andaresBusca = [];
            this.andaresDestino = [];
            this.localizacao = 1;
            this.estado = 'PARADO';
            this.quantidadePessoas = 0;
        }

        return (Elevador);
    }
})();