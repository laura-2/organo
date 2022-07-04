import './card.css';

const Card = ({ lugar, data, nota, descricao, corDeFundo}) =>{
    return(
        <div className='card'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <h4>{lugar}</h4>
                <h4>{data}</h4>
            </div>
            <div className='rodape'>
                <h4>{nota}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}
export default Card;