import React, { useState } from 'react';
import { connect } from 'react-redux';
import { petActions }  from '../actions';

class GetPet extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            status: "available",
        }
    }
    // const [status, setStatus] = useState("available");

    setStatus(status) {
        this.setState({ status: status })
    }

    // const filteredData = petList.filter()
    render() {
        return (
            <div>
            <h1>Get pets by status</h1>
                <input type="radio" name="status" value="available" onChange={() => this.setStatus("available")}/> Available <br/>
                <input type="radio" name="status" value="sold" onChange={() => this.setStatus("sold")}/> Sold <br/>
                <input type="radio" name="status" value="pending"onChange={() => this.setStatus("pending")}/> Pending <br/>
                <button onClick={() => this.props.fetchPets(this.state.status)}>
                    Fetch
                </button>
                <input type="text" onChange={(event) => this.props.filterPets(event.target.value)}/>
                {
                    this.props.petList && 
                    <div>
                    <ul>
                        {
                            this.props.petList.map( pet => (
                                <li key={pet.id}>
                                    {pet.name}
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                }
            <hr/>
            <hr/>
            </div>
        )
    }
    
}

// const GetPet = props => {

//     const [status, setStatus] = useState("available");


//     // const filteredData = petList.filter()
//     return (
//         <div>
//         <>
//         <h1>Get pets by status</h1>
//             <input type="radio" name="status" value="available" onChange={() => setStatus("available")}/> Available <br/>
//             <input type="radio" name="status" value="sold" onChange={() => setStatus("sold")}/> Sold <br/>
//             <input type="radio" name="status" value="pending"onChange={() => setStatus("pending")}/> Pending <br/>
//             <button onClick={() => props.fetchPets(status)}>
//                 Fetch
//             </button>
//             <input type="text" onChange={(event) => props.filterPets(event.target.value)}/>
//             {
//                 props.petList && 
//                 <>
//                 <ul>
//                     {
//                         props.petList.map( pet => (
//                             <li key={pet.id}>
//                                 {pet.name}
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 </>
//             }
//         <hr/>
//         <hr/>
//         </>
//         </div>
//     )
// }

const mapStateToProps = state => ({
    petList: state.petReducer.petList,
});

const mapDispatchToProps = dispatch => ({
    fetchPets: (status) => { dispatch(petActions.fetchPets(status)) },
    filterPets: (name) => { dispatch(petActions.filterPets(name)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(GetPet);
