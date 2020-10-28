import Axios from 'axios';
import React from 'react';
import Details  from "./Details";
import SearchBar from "./SearchBar";
import "./css/App.css";


class App extends React.Component {
    state = {
        details: {},
        requestFailed: null,
        loading: false
    };

    onSubmit = async (term) => {
        this.setState({loading: true});
        try {         
            const response = await Axios.get(`https://vat.erply.com/numbers?vatNumber=${term}`);
            this.setState({details: response.data, requestFailed: false, loading: false});      
        } catch (e) {
            this.setState({requestFailed: true, loading: false});
        }
    }

    render() {
        return(
            <div className="container">
                <h1 className="header">VAT number checker</h1>
                <SearchBar onSubmit={this.onSubmit}  requestFailed={this.state.requestFailed}/>
                <Details details={this.state.details} loading={this.state.loading}/>
            </div>
        );
    }
}

export default App;