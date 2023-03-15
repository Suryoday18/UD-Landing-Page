import AuthDetails from './AuthDetails'
import OurServices from "./OurServices"
import ImportantLinks from "./ImportantLinks"

const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AuthDetails />
            <OurServices />
            <ImportantLinks />
        </div>
    )
}

export default Card