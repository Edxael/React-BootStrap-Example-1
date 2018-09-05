import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap'
 
export default class extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                
                <Button>Push It</Button>
                <br/><br/>

                <div>Next put a modal:</div>
                <div>https://react-bootstrap.github.io/components/modal/</div>
                
            </div>
        )
    }
}