import React from 'react';
import './Rocard.css';
class Rocard extends React.Component {

    render() {
        const { name, username, email } = this.props;
        return (<>
            <div className="container">

                <img src={`https://robohash.org/${username}`} alt={username} />
                <h2>{name}</h2>
                <h4>{email}</h4>
            </div>
        </>)
    }

}
export default Rocard;