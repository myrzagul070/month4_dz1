

export const Card = (props)=>{
    return(
        <div className="card">
            <img className="card__img" src={props.img} alt=""/>
            <h1 className="card-h1">{props.title}</h1>
            <span className="card-span">{props.span}</span>
            <button className="card-btn" onClick={props.bt}>{props.btn}</button>
        </div>
    )
}


