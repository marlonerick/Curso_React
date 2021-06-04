import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    /*Trecho de um arquivo jsx*/
    /*const li1 = (
        <li>
            {alunos[0].id}) {alunos[0].nome} sua nota {alunos[0].nota}
        </li>
    )*/

    const alunosLi = alunos.map((aluno) => {
        return (
            <li key={alunos.id}>
                {aluno.id}) {aluno.nome} sua nota {aluno.nota}
            </li>
        )
    }
    )
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosLi}
            </ul>
        </div>
    )
}