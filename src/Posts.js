import React from "react"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Likes from './Likes';

class Posts extends React.Component {
    render() {
        return (
            <div>
                {this.props.posts.map((p) =>
                    <Card className="posts">
                        <h3>{p.author}</h3>
                        <p>{p.message}</p>
                        <Likes/>
                    </Card>
                )}
            </div>
        ) 
   }
}
    
       
export default Posts;