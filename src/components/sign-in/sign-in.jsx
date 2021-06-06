import React from 'react';
import FromInput from '../form-input/form-input';
import Button from '../button/button';
import {auth,signInWithGoolge} from '../../firebase/firebase';
import './sign-in.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch (err){
            console.log(err)
        }
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="container">
                <div className="signin">
                    <form onSubmit={this.handleSubmit}>
                        <div className="main">
                        <FromInput name="email" handleChange={this.handleChange} type="email" value={this.state.email} placeholder="Write Your Email" />
                        <FromInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} placeholder="Password"/>
                        </div>
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoolge}>Sign In WIth Google</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;