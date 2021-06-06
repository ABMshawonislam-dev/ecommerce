import React from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {auth,userProfileData} from '../../firebase/firebase';
import './sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("password not match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await userProfileData(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }catch (err){
            console.error(err)
        }
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="container">
                <div className="signup">
                    <form onSubmit={this.handleSubmit}>
                        <div className="main">
                        <FormInput name="displayName" handleChange={this.handleChange} type="text" value={displayName} placeholder="Write Your Name" />
                        <FormInput handleChange={this.handleChange} name="email" type="email" value={email} placeholder="Write Your Email"/>
                        <FormInput handleChange={this.handleChange} name="password" type="password" value={password} placeholder="Password"/>
                        <FormInput handleChange={this.handleChange} name="confirmPassword" type="password" value={confirmPassword} placeholder="Confirm Your Password"/>
                        </div>
                        <Button type="submit">Sign Up</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;

