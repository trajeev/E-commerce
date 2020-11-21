import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart })=> {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const {email, password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        emailSignInStart(email, password)
    }

    const handleChange =  event => {
        const {value, name} = event.target

        setCredentials({...userCredentials, [name]: value})
    }
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>  
                <span>Sign In with your email and password</span>
                <form onSubmit = {handleSubmit}>
                    <FormInput 
                        name = 'email' 
                        type = 'email' 
                        value = {email}
                        handleChange = {handleChange} 
                        label = 'email'
                        required />
                    <FormInput 
                        name = 'password' 
                        type = 'password' 
                        value = {password} 
                        handleChange = {handleChange}
                        label = 'password'
                        required />
                    <div className = 'buttons'>
                        <CustomButton type = 'submit' value = 'submit form'>
                            SIGN IN
                        </CustomButton>
                        <CustomButton type = "button" onClick = {googleSignInStart} value = 'submit form' isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)