import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component'

import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
            if(error.code === "auth/user-not-found") {
                alert("Benutzer ist nicht vorhanden");
            } else if (error.code === "auth/wrong-password") {
                alert("Passwort ist nicht korrekt");
            }
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}/>
                
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="password"
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn;