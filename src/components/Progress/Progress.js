import React, {Component} from 'react';
import fire from '../../config/Fire';

class Progress extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            content: '',
            subject: ''
        };
    }

    logout = () => {
        fire.auth().signOut();
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value});
        
    }

    addContent = (e) =>{
        fire.database().ref('Progress/').push(
            {
            }
        ).then((data)=>{
            //success callback
            this.setState({
                name : this.state.name,
                subject : this.state.subject,
                content : this.state.content
            })
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
       }
           
          

    render(){
        return(
                 
            <div className="form_block">
            <div id="title">Progress</div>
            <div className="body">
                
                <form>
                    <label >Name</label>
                    <input type="text" 
                    value={this.state.name} 
                    onChange={this.handleChanges} 
                    name="name" />
                    <label >Subject</label>
                    <input type="text" 
                    value={this.state.subject} 
                    onChange={this.handleChanges} 
                    name="subject" />
                    <label>Content</label>
                    <input type="text" 
                    value={this.state.content} 
                    onChange={this.handleChanges} 
                    name="content" />
                    <input className="loginBtn" type="submit" onClick={this.addContent} value="Submit" />

                </form>
                <button className="registerBtn" onClick={this.logout}>Logout</button>
              
            </div>
        </div>

               )
    }

}

export default Progress;