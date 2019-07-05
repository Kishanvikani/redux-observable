import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { petActions }  from '../actions';
import {Header, Home, CreatePet, GetPet} from '../components'

class App extends React.Component{
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

// const mapStateToProps = state => ({
//     tool: state.workshop.tool,
// });

// const mapDispatchToProps = dispatch => (
//     bindActionCreators({ switchTool }, dispatch)
// );

export default connect(null, null)(App);
