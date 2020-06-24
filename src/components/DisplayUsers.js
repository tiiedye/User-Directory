import React from "react";
import FilteredUserRender from "./FilteredUserRender"
import UserRender from "./UserRender"

function DisplayUsers(props) {
    if (props.filteredResults.length === 0) {
        return (
            <UserRender
                results={props.results}
            />
        )
    } else {
        return (
            <FilteredUserRender
                results={props.filteredResults}
            />
        )
    }
}

export default DisplayUsers