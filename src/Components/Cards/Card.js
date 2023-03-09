import CardComponent from "./Card1"
import AboutUsCard from "./Card2"
import Schema from "./Cardsss/Schema"

const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <CardComponent />
            <AboutUsCard />
            <Schema />
        </div>
    )
}

export default Card