import React from 'react';

export function Profile(props: {fullName: string, photoPath: string, job: string, siblings?: number, alert?: any}) {
    return (
        <div className="profile-container">
        <div className="profile">
            <img src={props.photoPath} className="photo" />
            <h2>{props.fullName}</h2>
            <p>{props.job}</p>
            <button onClick={() => props.alert(props.fullName)}>Click here</button>
            <p>Number of siblings: {props.siblings? props.siblings : 'Unknown'} </p>
        </div>
    </div>
    )
}

export const gmc = 'gmc sfax';