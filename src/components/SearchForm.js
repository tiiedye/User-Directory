import React from "react";

const styles = {
    input: {
        width: "500px"
    }
}

function SearchForm(props) {
    return (
        <form className="form">
            <input
                className="form-control"
                style={styles.input}
                value={props.search}
                name="search"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Search for a User"
            />
            <button className="btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchForm;