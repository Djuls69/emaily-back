import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className='container'>
          <div className='nav-wrapper'>
            <Link to='/' className='left brand-logo'>
              Emaily
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='/auth/google'>Se connecter avec Google</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
