import React, {useState, useEffect} from 'react';
import RevCreate from './RevCreate';

const RevDisplay = (props) => {

    const [reviews, setReviews] = useState([])

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

    return(
        <div>
            <RevCreate fetchRev={fetchRev} token={props.token}/>
        </div>
    )
};

export default RevDisplay;