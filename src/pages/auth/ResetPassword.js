import '../styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../../components/FormComponents';
import { auth } from '../../firebase';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = ({ history }) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [authError, setAuthError] = useState(null);
    const [authSuccess, setAuthSuccess] = useState(null);

    const handleResetPassword = async (data) => {
        try {
            await auth.sendPasswordResetEmail(data.email);
            setAuthSuccess('E-mail successfully sent. ');
            setAuthError(null);
        } catch (error) {
            setAuthError(error.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>Reset password</title>
                <meta name="description" content="Form where users can send a reset password e-mail to themselves." />
            </Helmet>
            <form onSubmit={handleSubmit(handleResetPassword)}>
                <div className="Container">
                    {authError &&
                        <div className='alert alert-danger'>
                            {authError}
                        </div>}
                    {authSuccess &&
                        <div className='alert alert-primary'>
                            {authSuccess}
                        </div>}
                    <h1>Reset password</h1>
                    <p>Send an e-mail to reset your password.</p>
                    <div className="Form">
                        <label>Username</label>
                        <FormInput ref={register({ required: true })} name="email" type="email" />
                        {errors.email &&
                            <div className='alert alert-danger'>
                                E-mail is a required field
                             </div>}
                        <FormButton type="submit">Reset password</FormButton>
                        <span className="bottom-text">Go back to the home page <Link to="/">here</Link></span>
                    </div>
                </div>
            </form>

        </>
    );
}

export default ResetPassword;
