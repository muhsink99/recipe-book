import '../styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../../components/FormComponents';
import { useContext, useState } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import { Redirect, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Signin = ({ history }) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [authError, setAuthError] = useState(null);

    const handleSignIn = (data) => {
        auth.signInWithEmailAndPassword(data.email, data.password).then(result => {
            history.push("/");
        }).catch(error => {
            setAuthError(error.message);
            console.log(error.message);
        });
    }

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        console.log(currentUser);
    }

    return (
        <>
            <Helmet>
                <title>Sign in</title>
                <meta name="description" content="Landing page where users can sign up/in." />
            </Helmet>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="Container">
                    <h1>Sign in</h1>
                    <div className="Form">
                        {authError &&
                            <div className='alert alert-danger'>
                                {authError}
                            </div>}
                        <label>Username</label>
                        <FormInput ref={register({ required: true })} name="email" type="email" />
                        {errors.email &&
                            <div className='alert alert-danger'>
                                E-mail is a required field
                             </div>}
                        <label>Password</label>
                        <FormInput ref={register({ required: true })} name="password" type="password" />
                        {errors.password &&
                            <div className='alert alert-danger'>
                                Password is a required field
                             </div>}
                        <label>Password</label>
                        <FormButton type="submit">Sign in</FormButton>
                        <span className="bottom-text">Don't have an account? <Link to="/signup">Click here!</Link></span>
                    </div>
                </div>
            </form>
        </>
    );
}

export default withRouter(Signin);
