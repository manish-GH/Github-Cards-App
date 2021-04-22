import React from "react";
import axios from 'axios';

class Form extends React.Component{
    state = { userName: ''};

    submitHandler = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data)
        this.setState({userName: ''})
    };
       
    render(){
        return (
            <form onSubmit={this.submitHandler} style={{padding: 20, border: 'solid 1px black', width: '20em', textAlign: 'center', backgroundColor: '#ccc'}}>
                <input type='text' 
                placeholder='Github username' 
                value={this.state.userName}
                onChange={event => this.setState({userName: event.target.value})}  
                required />
                <button>Add card</button>
            </form>
        )
    }

}


export default Form;