(function() {
    angular
      .module('ElevadorInteligente')
      .factory('Elevador', Factory);

    function Factory() {

        function Elevador() {
            this.andaresBuscaSubindo = [];
            this.andaresDestinoSubindo = [];
            this.andaresBuscaDescendo = [];
            this.andaresDestinoDescendo = [];
            this.localizacao = 1;
            this.estado = 'PARADO';
            this.quantidadePessoas = 0;
        }

        return (Elevador);
    }
})();
