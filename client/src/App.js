import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import 'materialize-css/dist/css/materialize.min.css'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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

export default App
