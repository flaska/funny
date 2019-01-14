import React from "react";
import { StaticRouter as Router} from "react-router";
import Main from "../../src/modules/main/main.component";


export default class ServerApp extends React.Component {
    state = {feed: {posts: []}};
    constructor(props){
        super(props);
        setTimeout(()=>this.init(),0);
    }


    init(){
        let dummyPosts = [];
        for (let i=0; i<8; i++) {
            dummyPosts.push({id: i});
        }
        this.setState({feed: {posts: dummyPosts}});
    }

    render(){
        return (
            <Router>
                <Main state={this.state}/>
            </Router>
        );
    }
}