import React, {useState} from 'react';

export default () => {
    const [textField, setTextField] = useState('avatar');
    return (
        <div>
            <label>Type here to look for an avatar: </label> 
            <br/>
            <input value={textField} onChange={(event) => setTextField(event.target.value)} type="text" />
            <div>
                {
                    textField.length !== 0 && <img src={`https://www.robohash.org/${textField}`} alt="avatar"/>
                }
            </div>
        </div>
    )
}