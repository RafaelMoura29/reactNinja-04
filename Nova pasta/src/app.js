'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import './css/style.css'

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <div>

          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/(sobre|contato)" component={Page} />
            <Route path="/blog" component={Blog} />
            <Route component={Error404} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

const Error404 = () => (
  <h1>Página nao encontrada</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const Page = ({ match }) => (
  <div>
    <h1>{match.url}</h1>
  </div>
)


const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><NavLink to="/blog/post-1">Post 1</NavLink></li>
      <li><NavLink to="/blog/post-2">Post 2</NavLink></li>
    </ul>
    <Switch>
      <Route path="/blog/:post(post-[12])" component={Post} />
      <Route exact path="/blog" component={NoPosts} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = () => (
  <div>
    <h2>Esse post não existe</h2>
  </div>
)

const Post = ({ match }) => (
  <div>
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ match }) => (
  <p>Selecione um post</p>
)

export default App
