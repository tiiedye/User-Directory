import React from "react";

const styles = {
    imgMargin: {
        marginRight: "50px"
    }
}

function UserRender(props) {
        return(
            <tbody>
                <table>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Registered
                        </th>
                    </tr>
                    {props.results.map(result => (
                        <tr>
                            <td>
                                <img alt={result.name.last} className="img-fluid" src={result.picture.thumbnail} style={styles.imgMargin} />
                            </td>
                            <td>
                                {result.name.first} {result.name.last}
                            </td>
                            <td>
                                {result.email}
                            </td>
                            <td>
                                {result.login.username}
                            </td>
                            <td>
                                {result.registered.date}
                            </td>
                        </tr>
                    ))}
                </table>
            </tbody>
        )
}

export default UserRender;