import React, { PureComponent, Fragment } from 'react';

class User extends PureComponent {


render() {
    return (
      <Fragment>
        <div>{this.props.match.params.userName}</div>
      </Fragment>
    )
  }
}

export default User;
