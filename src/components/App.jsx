import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { petActions }  from '../actions';
import {Header, Home, CreatePet, GetPet} from '../components';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/get" component={GetPet}/>
                    <Route exact path="/create" component={CreatePet}/>
                </Switch>
            </Router>
            
        );
    }
}


const mapStateToProps = state => ({
    petList: state.petReducer.petList,
});

const mapDispatchToProps = dispatch => ({
    fetchPets: (petId) => { dispatch(petActions.fetchPets(petId)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
