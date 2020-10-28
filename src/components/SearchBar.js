import React from 'react';
import "./css/SearchBar.css"

class SearchBar extends React.Component {
    state = {
        term: "", 
        inputIsBlank: false,
        requestFailed: this.props.requestFailed    
    };

    validate = () => {
        if(this.state.term === "") {
            this.setState({inputIsBlank: true})
            return false;
        } else {
            this.setState({inputIsBlank: false})
            return true;
        }           
    }

    errorMessage() {
        if (this.state.inputIsBlank) {
            return (
                <div className="alert alert-danger" role="alert">
                  You need to enter VAT number!
                </div>
            );
        } else if (this.props.requestFailed) {
            return (
                <div className="alert alert-danger" role="alert">
                  Please check Your VAT number it`s invalid!
                </div>
            );
        } else {
            return;
        }
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const val = this.validate();
        if(val) {
            this.props.onSubmit(this.state.term);         
        }
    };

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="form-group">
                <input type="text" className="form-control" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                <small className="form-text text-muted">Please enter VAT number You would like to search.</small>
                {this.errorMessage()}
                <button type="submit" className="btn btn-danger" >Check VAT</button>
            </form>
        );
    }
}

export default SearchBar;