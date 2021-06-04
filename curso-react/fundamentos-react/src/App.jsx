import './App.css'
import React from 'react'

//**Import de arquivo */
import MegaSena from "./componentes/megaSena/Mega"
import Contador from "./componentes/contador/Contador.jsx"
import Input from "./componentes/formulario/Input"
import IndiretaPai from "./componentes/comunicacao/IndiretaPai"
import DiretaPai from "./componentes/comunicacao/DiretaPai"
import UsuarioInfo from "./componentes/condicional/UsuarioInfo"
import ParOuImpar from "./componentes/condicional/ParOuImpar"
import TabelaProdutos from './componentes/repetição/TabelaProdutos'
import ListaAlunos from './componentes/repetição/ListaAlunos'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import Primeiro from './componentes/basicos/Primeiro'
import ComParamentro from './componentes/basicos/ComParamentro'
import Fragmento from './componentes/basicos/Fragmento'
import NumberRandom from './componentes/basicos/NumberRandom'
import Card from './componentes/Layout/Card'

//** Exercicios*/

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards" >
            <Card titulo="#13 Desafio MegaSena" color="#f2e40c" >
                <MegaSena qtde={6} />
            </Card>
            <Card titulo="#12 Contador" color='#ff0040'>
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 Componente Controlado (Input)" color='#FFF'>
                <Input />
            </Card>
            <Card titulo="#10 Comunicação Indireta" color='#0F0'>
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 Comunicação Direta" color='#59323C'>
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 Renderização Condicional" color='#982395'>
                <ParOuImpar numero={10} />
                <UsuarioInfo usuario={{ nome: "Marlon" }} />
                <UsuarioInfo />
            </Card>
            <Card titulo="#07 Desafio Repetição" color='#FFF'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 Componente com Filhos" color='#F00'>
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 Componente com Filhos" color='#00F'>
                <Familia sobrenome="Amarante">
                    <FamiliaMembro nome="Marlon" />
                    <FamiliaMembro nome="Nicolas" />
                    <FamiliaMembro nome="Marinez" />
                </Familia>
            </Card>
            <Card titulo="#04 Desafio Numero Aleatório" color='#ff4500' >
                <NumberRandom min={1} max={60} />
            </Card>
            <Card titulo="#03 Fragmento" color="#FF0000">
                <Fragmento></Fragmento>
            </Card>
            <Card titulo="#02 Organizador" color="#0F0" >
                <ComParamentro
                    titulo="Organizador de notas"
                    subtitulo="Media nota do Aluno"
                    nome="Marlon Erick"
                    media={7.5}
                />
            </Card>
            <Card titulo="#01 Primeiro" >
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div >