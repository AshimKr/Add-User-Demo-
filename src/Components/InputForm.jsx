import React, { useState } from 'react'

function InputForm({ addUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState('');

    const InputHandler = () => {
        const data = { name, age };
        addUser(data);
        setName('');
        setAge('');

    }

    return (
        <div>
            {/* <ErrorModel /> */}
            <div className=' container p-4 mt-2 bg-light rounded' style={{ maxWidth: '640px' }}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">User Name</span>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Age</span>
                    <input type="number" onChange={(e) => { setAge(e.target.value) }} value={age} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className=" d-grid gap-2 col-2  ">
                    <button type="submit" onClick={InputHandler} className="btn btn-primary">Add User</button>

                </div>


            </div>
        </div>

    )
}

export default InputForm