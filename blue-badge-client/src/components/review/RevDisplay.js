import React, {useState, useEffect} from 'react';
import RevCreate from './RevCreate';
import RevEdit from './RevEdit';

const RevDisplay = (props) => {

    const [reviews, setReviews] = useState([])
    const [revUpdateActive, setRevUpdateActive] = useState(false);
    const [updateMyRev, setUpdateMyRev] = useState({}); 

    const fetchRev = () => {
        fetch('http://localhost:3500/rev', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((logRev) => {
            setReviews(logRev)
            console.log(logRev)
        })
    }   
    
    useEffect(() => {
        fetchRev()
    }, [])

    const editUpdateRev = (rev) => {
        setUpdateMyRev(rev)
    }

    const updateOn = () => {
        setRevUpdateActive(true)
    }

    const updateOff = () => {
        setRevUpdateActive(false)
    }

    return(
        <div>
            <RevCreate fetchRev={fetchRev} token={props.token}/>

            {/* Need to link to MY REVIEWS/ALL REVIEWS PAGE?? -- Still need to call editUpdateRev() and updateOn() */}

            {revUpdateActive ? <RevEdit updateMyRev={updateMyRev} updateOff={updateOff}  token={props.token} fetchRev={fetchRev} />
            : <></>}
        </div>
    )
};

export default RevDisplay;