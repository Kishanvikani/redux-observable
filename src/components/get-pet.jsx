import React, { useState } from 'react';
import { connect } from 'react-redux';
import { petActions }  from '../actions';

const GetPet = props => {

    const [status, setStatus] = useState("available");

    return (
        <div>
        <>
        <h1>Get pets by status</h1>
            <input type="radio" name="status" value="available" onChange={() => setStatus("available")}/> Available <br/>
            <input type="radio" name="status" value="sold" onChange={() => setStatus("sold")}/> Sold <br/>
            <input type="radio" name="status" value="pending"onChange={() => setStatus("pending")}/> Pending <br/>
            <button onClick={() => props.fetchPets(status)}>
                Fetch
            </button>
            <input type="text" onChange={(event) => props.filterPets(event.target.value)}/>
            {
                props.petList && 
                <>
                <ul>
                    {
                        props.petList.map( pet => (
                            <li key={pet.id}>
                                {pet.name}
                            </li>
                        ))
                    }
                </ul>
                </>
            }
        </>
        </div>
    )
}

const mapStateToProps = state => ({
    petList: state.petReducer.petList,
});

const mapDispatchToProps = dispatch => ({
    fetchPets: (status) => { dispatch(petActions.fetchPets(status)) },
    filterPets: (name) => { dispatch(petActions.filterPets(name)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(GetPet);
