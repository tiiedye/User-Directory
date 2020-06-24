import React, { Component } from "react";
import API from "../utils/API.js"
import DisplayUsers from "./DisplayUsers"
import SearchForm from "./SearchForm.js"

class Form extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: []
    };

    searchUser = () => {
      API.search()
          .then(results => this.setState({ results: results.data.results }))
          .catch(err => console.log(err));
    };

    componentDidMount() {
      this.searchUser();
    }



    handleInputChange = event => {
      let value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      })

      const inputValue = event.target.value

      const filteredResults = this.state.results.filter(item => {
        return item.name.first.includes(inputValue)
        // console.log(item.name.first)
        // console.log(inputValue)
      });

      console.log(filteredResults)

      this.setState({
        filteredResults: filteredResults
      })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchUser(this.state.search);
    };


    
    render() {
        return (
          <div>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
             />
            <p></p>
            
            <div className="card">
              <h5 className="card-header">Users</h5>
                  <div className="card-body">
                      <DisplayUsers
                        results={this.state.results}
                        filteredResults={this.state.filteredResults}
                      />
                  </div>
            </div>           
          </div>
        );
      }
}

export default Form;