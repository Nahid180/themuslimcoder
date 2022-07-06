import './components/css/card.css'


function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="card__header">
                    <img src={props.banner} alt="card__image" className="card__image" width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">{props.topic}</span>
                    <small>{props.date}</small>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <div className="user__info">
                            <h5>{props.read} min read</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;