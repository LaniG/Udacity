import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Message } from "semantic-ui-react";
import Post from "./features/posts/Post";
import PostsContainer from "./features/posts/PostsContainer";
import AddPost from "./features/posts/AddPost";
import EditPost from "./features/posts/EditPost";
import Navbar from "./features/layout/Navbar";
import Footer from "./features/layout/Footer";
import { fetchCategories } from "./features/categories/CategoryActions";
import "./App.css";

const Error404 = () => {
  return (
    <Message negative>
      <Message.Header>Sorry, the requested resource was not found.</Message.Header>
      <p>It was either deleted or the id is wrong.</p>
    </Message>
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="App-container">
          <Route path="/" component={PostsContainer} />
          <Switch>
            <Route exact path="/posts/add" component={AddPost} />
            <Route exact path="/posts/:category" component={PostsContainer} />
          </Switch>
          <Route exact path="/posts/:category/:id/edit" component={EditPost} />
          <Route exact path="/posts/:category/:id" component={Post} />
          <Route exact path="/404" component={Error404} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchCategories })(App));
