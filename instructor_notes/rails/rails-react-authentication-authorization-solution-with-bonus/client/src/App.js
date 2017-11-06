import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import {setAxiosDefaults, userIsLoggedIn} from './util/sessionHeaderUtil'
import PostsList from './components/PostsList'
import axios from 'axios'
import GlobalNav from './components/GlobalNav'
import Redirect from 'react-router-dom/es/Redirect'
import FlashError from "./components/FlashError";

class App extends Component {

    state = {
        posts: [],
        signedIn: false,
        error: ''
    }

    async componentWillMount() {
        const signedIn = userIsLoggedIn()

        let posts = []
        if (signedIn) {
            setAxiosDefaults()
            posts = await this.getPosts()
        }

        this.setState({
            posts,
            signedIn,
        })

    }

    dismissError = () => {
        this.setState({error: ''})
    }

    getPosts = async () => {
        try {
            const response = await axios.get('/posts')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    deletePost = async (postId) => {
        try {
            await axios.delete(`/posts/${postId}`)

            const posts = await this.getPosts()
            this.setState({posts})

        } catch (error) {

            let errorMessage = "Something went wrong! Try again soon."
            if (error.response.status === 401) {
                errorMessage = 'You can only delete your own posts!'
            }

            this.setState({
                error: errorMessage
            })

        }
    }

    setUserSignedIn = async () => {
        const posts = await this.getPosts()
        this.setState({
            signedIn: true,
            posts
        })
    }

    signOut = () => {
        this.setState({
            signedIn: false,
            posts: []
        })
    }

    render() {
        const PostsComponent = () => (
            <PostsList
                posts={this.state.posts}
                deletePost={this.deletePost}/>
        )
        const SignUpLogInComponent = () => (
            <SignUpLogIn setUserSignedIn={this.setUserSignedIn}/>
        )

        return (
            <Router>
                <div className="App">
                    <GlobalNav signedIn={this.state.signedIn} signOut={this.signOut}/>

                    {this.state.error ? <FlashError error={this.state.error} dismissError={this.dismissError}/> : null}

                    <Switch>
                        <Route exact path="/posts" render={PostsComponent}/>
                        <Route exact path="/signUp" render={SignUpLogInComponent}/>
                    </Switch>

                    {/* If user is signed in, redirect to their posts. */}
                    {this.state.signedIn ? <Redirect to="/posts"/> : <Redirect to="/signUp"/>}

                </div>
            </Router>
        )
    }
}

export default App
