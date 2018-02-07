import React from 'react'
import { Route }  from 'react-router'
import MainPage from './components/MainPage'
import Login from './components/Login'
import Header from './components/Header'
import AboutPage from './components/AboutPage'
import CategoriesPage from './components/CategoriesPage'

export default (
  <div>
    <Header />
    <Route component={MainPage} path='/' />
    <Route exact component={CategoriesPage} path='/categories' />
    <Route exact component={AboutPage} path='/about' />
    <Route exact component={Login} path='/login' />
  </div>
)
