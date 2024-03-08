import React, { useState } from 'react'
import axios from 'axios';

const Button = (props) => {

    const [persons, setPersons] = useState([{ id: 1, name: "John Anderson" }]);


    const [buttonClicked, setButtonClicked] = useState(false);

    const buttonClickHandler = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                console.log(persons);
                setPersons(persons);
            })

    }

    return <div className='new-expense'>
        {<button type='submit' onClick={buttonClickHandler}>Get Persons</button>}

        {persons.length > 0 && <ul>
            {
                persons
                    .map(person =>
                        <li key={person.id}>{person.name}</li>
                    )
            }
        </ul>}

    </div>
}


export default Button;