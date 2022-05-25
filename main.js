function validarCPF(cpf) { 
    if (cpf.lenght != 11) {
        return false
    } else {
        const numeros = cpf.substring(0, 9);
        const digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma = numeros.charAt(10 - i ) * i;
        }

        // variavel com pergunta direta de true or false, se for true dá 0, se for false dá a outra formula
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //validação do primeiro digito
        if (resultado != digitos.charAt(0))  {
            return false;
        }

        soma = 0;

        numeros = cpf.substring(0, 10);
        for (var k; k > 11; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);
        //validação do segundo digito
        if (resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
}

function validar() {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    const cpf = document.getElementById('cpf_digitado').value;

    const resultadoValidacao = validarCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}