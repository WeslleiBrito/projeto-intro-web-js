const cursos = [{
        curso: 'HTML e CSS',
        descricao: 'O curso é voltado para o desenvolvimento frontand',
        duracao: '1 mês',
        valor: 500.00,
    },

    {
        curso: 'JavaScript',
        descricao: 'Foco no backand ',
        duracao: '2 mês',
        valor: 900.00
    },

    {
        curso: 'APIs REST',
        descricao: 'Ferramenta para ligação entre sistemas',
        duracao: '6 meses',
        valor: 2000.00
    }
]

const turmas = [{
        turma: 'Hipátia',
        curso: 'JavaScript',
        inicio: '30/11/2022',
        termino: '30/01/2023',
        numeroDeAlunos: 150,
        periodo: 'Noturno',
        concluido: false
    },

    {
        turma: 'Sibyla',
        curso: 'JavaScript',
        inicio: '30/10/2022',
        termino: '30/12/2022',
        numeroDeAlunos: 200,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Curie',
        curso: 'HTML e CSS',
        inicio: '15/09/2022',
        termino: '15/10/2022',
        numeroDeAlunos: 180,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Zhenyi',
        curso: 'HTML e CSS',
        inicio: '01/11/2022',
        termino: '01/01/2023',
        numeroDeAlunos: 80,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Clarke',
        curso: 'HTML e CSS',
        inicio: '04/07/2022',
        termino: '04/09/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Blackwell',
        curso: 'APIsREST',
        inicio: '20/03/2022',
        termino: '20/06/2022',
        numeroDeAlunos: 100,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Elion',
        curso: 'APIsREST',
        inicio: '12/01/2022',
        termino: '12/06/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Burnell',
        curso: 'APIsREST',
        inicio: '18/10/2022',
        termino: '18/04/2023',
        numeroDeAlunos: 90,
        periodo: 'Integral',
        concluido: false
    },
]

const estutantes = [{
        estudante: 'Chris Evans',
        turma: 'Hipátia',
        curso: 'Javascript',
        valor: 900.00,
        nParcelas: 9,
        desconto: false,
        parcelas: 100.00
    },

    {
        estudante: 'Halle Berry',
        turma: 'Burnel',
        curso: 'APIsRest',
        valor: 2000.00,
        nParcelas: '4',
        desconto: false,
        parcelas: 4
    },

    {
        estudante: 'Lashana lynch',
        turma: 'Zhenyi',
        curso: 'HTML e CSS',
        valor: 500.00,
        nParcelas: 1,
        desconto: true,
        parcelas: 500.00
    },
]

function arredonadaParaCima(valor) {

    const valorInteiro = parseInt(valor)
    let arredondado = valorInteiro

    if ((valor - arredondado < 0.5) && (valor - arredondado > 0)) {
        arredondado = valorInteiro + 0.50
        return `${String(arredondado).replace('.', ',')}0`
    } else if (valor > arredondado) {
        return `${arredondado + 1},00`
    } else {
        return `${valor},00`
    }
}

function somarValorArray(arrayDeNumeros) {
    let soma = 0

    for (valor of arrayDeNumeros) {
        soma += valor
    }

    return soma
}

function parelarCurso(parcela, curso, arrayDeValores) {
    let valorParcela = arredonadaParaCima(somarValorArray(arrayDeValores) / parcela)
    let valorTotal = somarValorArray(arrayDeValores)


    switch (arrayDeValores.length) {
        case 3:
            valorTotal *= 0.85
            break
        case 2:
            valorTotal *= 0.90
            break
    }

    if (parcela <= 2) {
        valorTotal = valorTotal - somarValorArray(arrayDeValores) * 0.2
        valorParcela = arredonadaParaCima(valorTotal / parcela)
        console.log(`O curso ${curso} ficou no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela} reais. Foi concedido mais um desconto de 20%, por conta do número de parcela ser menor que 3.`)
    } else {
        console.log(`O curso ${curso} ficou no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela} reais.`)

    }
}

function buscarCurso(nomeCurso) {

    for (let curso of cursos) {
        if (curso.curso === nomeCurso) {
            return curso
        }
    }

    return 'Curso não localizado'
}

function buscarTurma(nomeTurma) {

    for (let objeto of turmas) {
        if (objeto.turma === nomeTurma) {
            return objeto
        }
    }

    return 'Turma não localizado'
}

function buscarEstudante(nomeEstudante) {
    for (let estudante of estutantes) {
        if (estudante.estudante === nomeEstudante) {
            return estudante
        }
    }

    return 'Estudante não encontrado'
}

function matricular(nome, curso, turma, numeroDeParcelas) {
    estutantes.push({
        estudante: nome,
        curso: curso,
        turma: turma,
        nParcelas: numeroDeParcelas
    })

    console.log(estutantes)
    const novoEstudante = estutantes[estutantes.length - 1]
    console.log(`\nAluno Matriculado\nNome: ${novoEstudante.estudante}\nCurso: ${novoEstudante.curso}\nTurma: ${novoEstudante.turma}`)
}

function adicionarValoresAoCarrinho(nomeCurso, callback) {
    carrinhoCursos.push(callback(nomeCurso).valor)
}

const carrinhoCursos = []

adicionarValoresAoCarrinho('JavaScript', buscarCurso)
adicionarValoresAoCarrinho('HTML e CSS', buscarCurso)

parelarCurso(5, cursos[0].curso, carrinhoCursos)