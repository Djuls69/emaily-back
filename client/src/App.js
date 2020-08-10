import React, { Fragment, Component } from 'react'
import { Route } from 'react-router-dom'
import * as actions from './actions'
import Header from './components/Header'
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from 'react-redux'
import Landing from './components/Landing'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route exact path='/surveys/new' component={SurveyNew} />
        </div>
      </Fragment>
    )
  }
}

export default connect(null, actions)(App)
