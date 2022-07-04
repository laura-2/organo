import {useState} from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';
import Viagem from './componentes/Viagem/viagem';

function App() {

  const passeios = [
    {
      nome: 'América',
      corPrimaria: '#57C278',
      corSecundaria: '#fffff4'
    },
    {
      nome: 'Europa',
      corPrimaria: '#82CFFA',
      corSecundaria: '#fffff4'
    },
    {
      nome: 'Ásia',
      corPrimaria: '#FFBA05',
      corSecundaria: '#fffff4'
    },
    {
      nome: 'África',
      corPrimaria: '#FF8A29',
      corSecundaria: '#fffff4'
    },
    {
      nome: 'Oceania',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#fffff4'
    }

  ]

  const [cards, setCards] = useState([])

  const novoCadastro = (card) => {
    // debugger
    setCards([...cards, card ])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario passeios={passeios.map(viagem => viagem.nome)} aoCadastrar={card => novoCadastro(card)}/>
      {passeios.map(viagem => <Viagem
      key={viagem.nome} 
      nome={viagem.nome} 
      corPrimaria={viagem.corPrimaria}
      corSecundaria={viagem.corSecundaria}
      cards={cards.filter(card => card.viagem === viagem.nome)}
      />)}
    </div>
  );
}

export default App;
