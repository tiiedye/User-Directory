import React from "react";
import UserRender from "./UserRender.js"

function UserCard () {
    return (
        <div className="card">
            <h5 className="card-header">Users</h5>
                <div className="card-body">
                    <UserRender />
                </div>
        </div>

    );
}

export default UserCard;