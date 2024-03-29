var saldo = 100.5; //Float
 
        var nome = prompt("Digite seu nome: ");
            alert("Olá "+ nome + " é um prazer ter você aqui!")
 
        function inicio() {
           
            var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Tranferência 6.) Sair'));
 
            switch(escolha){
                case 1:
                    senha();
                    ver_saldo();
                    break;
                case 4:
                    senha();
                    fazer_deposito();
                    break;
                case 3:
                    senha();
                    fazer_saque();
                    break;
                case 6:
                    sair();
                    break;
                case 2:
                    senha();
                    ver_extrato();
                    break;
                case 5:
                    senha();
                    transferencia();
                    break;
                    default:
                    erro();
 
            }
            /*
            if (escolha === 1) {
                ver_saldo();
            } else if (escolha === 2) {
                fazer_deposito();
            } else if (escolha === 3) {
                fazer_saque();
            } else if (escolha === 4) {
                sair();
            } else {
                erro();
            }
            */
        }
        function senha(){
            var key = 3589;
            var sen = parseInt(prompt("Digite a senha: "));
 
            while (sen != key) {
                var sen = parseInt(prompt("Digite a senha novamente: "));
            }
        }      
 
        function ver_saldo() {
            alert('Seu saldo atual é: ' + saldo);
            inicio();
        }
 
        function fazer_deposito() {
            var deposito = parseFloat(prompt('Qual o valor para depósito?'));
            // Not a Number
            if (isNaN(deposito) || deposito === '') {
                alert('Por favor, informe um número:');
                fazer_deposito();
            }
            else if( deposito <= 0){
                alert("Operação não autorizada");
                fazer_deposito();
            }
            else {
                saldo += deposito;
                ver_saldo();
            }
        }
 
        function fazer_saque() {
            var saque = parseFloat(prompt('Qual o valor para saque?'));
            if (isNaN(saque) || saque === '' ) {
                alert('Por favor, informe um número:');
                fazer_saque();
            }else if(saque>saldo || saque <= 0){
                alert("Operação não autorizada");
                fazer_saque();
            }
            else {
                saldo -= saque;
               
                ver_saldo();
            }
        }
 
        function erro() {
            alert('Por favor, informe um número entre 1 e 6');
            inicio();
        }
 
        function sair() {
            var confirma = confirm('Você deseja sair?');
            if (confirma) {
                alert(nome+", foi um prazer ter você por aqui!")
                window.close();
            } else {
                inicio();
            }
        }
 
        function ver_extrato(){
            alert("Compra realizada na casa da Vovó\n Valor da compra: 50\n\nCompra realizada na Dior\n Valor da compra: 200");
            inicio();
        }
        function transferencia(){
            var conta = parseInt(prompt("Digite o número da conta: "));
           
            if (isNaN(conta) || conta === '' ) {
                alert('Por favor, informe o número da conta:');
                transferencia();
            }  
           
            var transf = parseFloat(prompt("Informe o valor da transferência:"));
              if (isNaN(transf) || transf === '' ) {
                alert('Por favor, informe um número:');
                transferencia();
            }  
            else if(transf>saldo || transf <= 0){
                alert("Operação não autorizada");
                transferencia();
            }
            else {
                saldo -= transf;
                ver_saldo();
            }
        }
   
        inicio();