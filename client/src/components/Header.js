import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapState = ({ auth }) => ({ auth })

export class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <a href='/auth/google'>Se connecter avec Google</a>
      default:
        return <a href='/api/logout'>Se déconnecter</a>
    }
  }

  render() {
    return (
      <nav>
        <div className='container'>
          <div className='nav-wrapper'>
            <Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo'>
              Emaily
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>{this.renderContent()}</li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(mapState)(Header)
