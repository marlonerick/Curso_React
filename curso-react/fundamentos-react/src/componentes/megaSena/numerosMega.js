function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return aleatorio;
}

function gerarNumero(qtde) {
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
        //sort comando para ordem crescente ou decresente
    return numeros
}
console.log(gerarNumero(6))
    //console.log(gerarNumeroNaoContido(1, 60, [0, 0, 0, 0, 0, 0]))