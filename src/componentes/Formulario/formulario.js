import "./formulario.css";
import CampoTexto from "../CampoTexto/campoTexto";
import Lista from "../ListaSuspensa/lista";
import Botao from "../Botao/botao";
import { useState } from "react";

const Formulario = (props) => {

  const [viagem, setViagem] = useState('')
  const [lugar, setLugar] = useState('')
  const [data, setData] = useState('')
  const [nota, setNota] = useState('')
  const [descricao, setDescricao] = useState('')


  const aoCompartilhar = (evento) => {
    evento.preventDefault()
    props.aoCadastrar({
      viagem, 
      lugar, 
      data, 
      nota, 
      descricao
    })
    setViagem('')
    setLugar('')
    setData('')
    setNota('')
    setDescricao('')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoCompartilhar}>
        <h2>Compartilhe sua experiência com a gente!</h2>
        <Lista 
          obrigatorio = {true} 
          label="Selecione onde fica seu lugar:"
          itens={props.passeios}
          valor={viagem}
          aoAlterar={valor => setViagem(valor)}
        />
        <CampoTexto 
          obrigatorio = {true} 
          label="Lugar" 
          placeholder="Digite o nome do lugar visitado"
          valor={lugar}
          aoAlterar={valor => setLugar(valor)}
        />
        <CampoTexto 
          obrigatorio = {true} 
          label="Data" 
          placeholder="Digite a data da visita" 
          valor={data}
          aoAlterar={valor => setData(valor)}
        />
        <CampoTexto 
          obrigatorio = {true} 
          label="Nota" 
          placeholder="Compartilhe sua avaliação com uma nota de 1 a 10!"
          valor={nota}
          aoAlterar={valor => setNota(valor)}
        />
        <CampoTexto 
          label="Descrição" 
          placeholder="Conte o que mais gostou, preços, dicas, atrações..."
          valor={descricao}
          aoAlterar={valor => setDescricao(valor)}
        />
        <Botao>Compartilhar</Botao>
      </form>
    </section>
  );
};
export default Formulario;
