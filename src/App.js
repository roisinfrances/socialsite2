
import React from 'react'
import './App.css'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from './Form'
import Posts from './Posts'
import Navi from './Navi';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.addPost = this.addPost.bind(this)
    this.state = {
      posts: [
        {author: "Roisin", message: "Hello World"}
      ]
    }
  }

  addPost(postData) {
    this.setState({posts: [...this.state.posts, postData]})
  }
  render() {
    return (
      <div className="App">
        <Router>
        <Navi />
          <Switch>
            <Route path="/add">
              <Form handlePost={this.addPost} />
            </Route>
            <Route path="/">
              <Posts posts={this.state.posts} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;