import React, {Component} from 'react';
import fire from '../../../config/Fire';
import Notes from '../Notes';

class AddNewNote extends Component {

    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
            name: ''
        }
    }

    handleUserInput = (e) => {
        this.setState({
            newNoteContent: e.target.value
        });
    }
    handleUserInputName = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
        <Notes name={this.state.name}></Notes>
    }

    addNote = () => {
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent: '',
            name: ''
        });
    }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="addNoteField">
                <input type="text" 
                    className="NoteField"
                    onChange={this.handleUserInputName}
                    value={this.state.name}
                    placeholder="Enter your Name" />
                <input type="text" 
                    className="NoteField"
                    onChange={this.handleUserInput}
                    value={this.state.newNoteContent}
                    placeholder="Write your Progrss..." />
                <button 
                    className="addNoteBtn"
                    onClick={this.addNote}>send</button>
                <button className="logOutBtn" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default AddNewNote;