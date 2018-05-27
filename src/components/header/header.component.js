import React, { PureComponent, Fragment } from 'react';
import './header.style.css';

class Header extends PureComponent {

    render() {
        return (
            <Fragment>
                <div className="inputValue_class">{this.props.inputValue}</div>
            </Fragment>
        )
    }
}

export default Header;
