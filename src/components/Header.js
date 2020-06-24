import React from "react";
import Form from "./Form.js"

function Header() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">User Database</h1>

            <p className="lead">Welcome to our User Database!</p>
            <hr className="my-4" />
            <p>Type in a name to begin your search</p>
            <Form />
        </div>

    );
  }
  
  export default Header;