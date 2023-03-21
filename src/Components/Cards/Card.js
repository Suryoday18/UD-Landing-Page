import ApplicationDetails from './ApplicationDetails'
import AuthDetails from './AuthDetails'
// import DetailsAndLinks from './DetailsAndLinks'
// import OurServices from "./OurServices"
// import ImportantLinks from "./ImportantLinks"

const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AuthDetails />
            {/* <OurServices />
            <ImportantLinks /> */}
            {/* <DetailsAndLinks /> */}
            <ApplicationDetails />
        </div>
    )
}

export default Card