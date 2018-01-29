import React from 'react'
import { Route, IndexRoute }  from 'react-router'
import MainPage from './components/MainPage'
import Header from './components/Header'
import AboutPage from './components/AboutPage'
import CategoriesPage from './components/CategoriesPage'

export default (
  <div>
    <Header />
    <Route component={MainPage} path='/' />
    <Route exact component={CategoriesPage} path='/categories' />
    <Route exact component={AboutPage} path='/about' />
  </div>
)
