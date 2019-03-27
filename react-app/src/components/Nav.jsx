import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Nav extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render() {
        const { anchorEl } = this.state;

        return (
            <header>
                <div className='navigation'>
                    <Button
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        variant="contained"
                        color="primary"
                    >
                        Menu
                    </Button>
                    <Menu
                        id="nav-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>
                            <Link to="/about">
                                {/* <Button variant="outlined" color="primary">About</Button> */}
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <Link to="/pageContent">
                                {/* <Button variant="outlined" color="primary">Content</Button> */}
                                Content
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </header>
        )
    }
}

export default Nav;