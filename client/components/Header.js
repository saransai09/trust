import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import query from '../Query/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return (
        <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
      );
    } else {
      return (
        <div>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo left">
            Home
          </NavLink>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);