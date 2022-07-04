import Card from '../Card/card';
import './viagem.css';

const Viagem =(props)=> {

    const css = {backgroundColor: props.corSecundaria}
    return(
        props.cards.length > 0 ?
        <section className='viagem' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
                {props.cards.map(card => 
                <Card key={card.nome}
                corDeFundo={props.corPrimaria}
                lugar={card.lugar} 
                data={card.data}
                nota={card.nota}
                descricao={card.descricao}
                />)}
            </div>
        </section>
        : ''
    )
}
export default Viagem;