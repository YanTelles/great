/*

document.getElementById('botao').addEventListener('click', function( event ) {

        var codigo = document.getElementById('txt').value;

        if(codigo == null || codigo == ""){
            alert('O Campo não deve está vazio');      
            return false;
        }else{
            axios.get(`https://economia.awesomeapi.com.br/all/`+codigo).then((dados) => {
                // console.log(dados.data..name);

                const atributo1 = ` Nome: ${dados.data.USD.name}`;
                document.getElementById("1").textContent = atributo1;    
   

        })
        .catch(erro => console.log(erro));
    }
})

*/

document.getElementById('libra').addEventListener('click', function( event ) {

    axios.get(`https://economia.awesomeapi.com.br/all/GBP`).then((dados) => {
                // console.log(dados.data..name);



                const nomeT = `${dados.data.GBP.name}`;
                document.getElementById("1").textContent = nomeT;
                
                const alta = `${dados.data.GBP.high}`;
                document.getElementById("2").textContent = alta;

                const baixa = `${dados.data.GBP.low}`;
                document.getElementById("3").textContent = baixa;

                const cod = `${dados.data.GBP.code}`;
                document.getElementById("4").textContent = cod;

                console.log(dados.data.GBP.name) ;
        })

})

document.getElementById('euro').addEventListener('click', function( event ) {

    axios.get(`https://economia.awesomeapi.com.br/all/EUR`).then((dados) => {
                // console.log(dados.data..name);



                const nomeT = `${dados.data.EUR.name}`;
                document.getElementById("1").textContent = nomeT;
                
                const alta = `${dados.data.EUR.high}`;
                document.getElementById("2").textContent = alta;

                const baixa = `${dados.data.EUR.low}`;
                document.getElementById("3").textContent = baixa;

                const cod = `${dados.data.EUR.code}`;
                document.getElementById("4").textContent = cod;

                console.log(dados.data.EUR.name) ;
        })

})

document.getElementById('dolar').addEventListener('click', function( event ) {

    axios.get(`https://economia.awesomeapi.com.br/all/USD`).then((dados) => {
                // console.log(dados.data..name);



                const nomeT = `${dados.data.USD.name}`;
                document.getElementById("1").textContent = nomeT;
                
                const alta = `${dados.data.USD.high}`;
                document.getElementById("2").textContent = alta;

                const baixa = `${dados.data.USD.low}`;
                document.getElementById("3").textContent = baixa;

                const cod = `${dados.data.USD.code}`;
                document.getElementById("4").textContent = cod;

                console.log(dados.data.USD.name) ;
        })

})

document.getElementById('lite').addEventListener('click', function( event ) {

    axios.get(`https://economia.awesomeapi.com.br/all/LTC`).then((dados) => {
                // console.log(dados.data..name);



                const nomeT = `${dados.data.LTC.name}`;
                document.getElementById("1").textContent = nomeT;
                
                const alta = `${dados.data.LTC.high}`;
                document.getElementById("2").textContent = alta;

                const baixa = `${dados.data.LTC.low}`;
                document.getElementById("3").textContent = baixa;

                const cod = `${dados.data.LTC.code}`;
                document.getElementById("4").textContent = cod;

                console.log(dados.data.LTC.name) ;
        })

})

document.getElementById('bit').addEventListener('click', function( event ) {

    axios.get(`https://economia.awesomeapi.com.br/all/BTC`).then((dados) => {
                // console.log(dados.data..name);



                const nomeT = `${dados.data.BTC.name}`;
                document.getElementById("1").textContent = nomeT;
                
                const alta = `${dados.data.BTC.high}`;
                document.getElementById("2").textContent = alta;

                const baixa = `${dados.data.BTC.low}`;
                document.getElementById("3").textContent = baixa;

                const cod = `${dados.data.BTC.code}`;
                document.getElementById("4").textContent = cod;

                console.log(dados.data.BTC.name) ;
        })

})