import React, { PureComponent, Fragment } from 'react';
import {Link} from 'react-router-dom';


class List extends PureComponent {


    renderUsersList = () =>
        this.props.usersList.map((item,index) =>
            <div key={index}>
                {index + 1}. <Link to={"/user/"+item}>{item}</Link>
            </div>
        );

    render() {
        return (
            <Fragment>
                {this.renderUsersList()}
            </Fragment>
        )
    }
}

export default List;
