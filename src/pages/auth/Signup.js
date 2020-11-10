import '../styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../../components/FormComponents';
import { auth, db } from '../../firebase';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Signup = ({ history }) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [authError, setAuthError] = useState(null);

    const handleSignUp = async (data) => {
        await auth.createUserWithEmailAndPassword(data.email, data.password).then(function (cred) {
            db.collection('users').doc(cred.user.uid).set({
                email: data.email,
                recipes: [{}],
            }).then(function () {
                history.push("/recipes");
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(error => {
            setAuthError(error.message);
            console.log(error.message);
        });
    }

    return (
        <>
            <Helmet>
                <title>Sign up</title>
                <meta name="description" content="Form where users can create an account." />
            </Helmet>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="Container">
                    {authError &&
                        <div className='alert alert-danger'>
                            {authError}
                        </div>}
                    <h1>Sign up</h1>
                    <div className="Form">
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
                        <FormButton type="submit">Sign up</FormButton>
                        <span className="bottom-text">Already have an account? <Link to="/signin">Click here!</Link></span>
                    </div>
                </div>
            </form>

        </>
    );
}

export default Signup;
