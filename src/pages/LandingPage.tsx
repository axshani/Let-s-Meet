// import { Meetings } from "./components/Meetings"
import Avatar from '@mui/material/Avatar';
import { DisplayINfromName } from '../utils/stringUtils';

type LandingPageProps = {
    name: string
    description: string
    availableMeetings?: object
}


export default function LandingPage(props: LandingPageProps) {
    return (
        <div style={{alignItems: "center", justifyContent: "center"}}>
            <Avatar
                alt={DisplayINfromName(props.name)}
                src="../public/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
            />
            <Avatar>{DisplayINfromName(props.name)}</Avatar>
            <div className="display-name">{props.name}</div>
            <div className="description">{props.description}</div>
            {/* {props.availableMeetings && <Meetings meetings={props.availableMeetings}/>} */}
        </div>
    )
}