import '../styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../../components/FormComponents';
import { useState, useCallback } from 'react';
import { auth } from '../../firebase';

const Signup = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        try {
            console.log(email);
            await auth.createUserWithEmailAndPassword(email, password);
            history.push("/")
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <>
            <Helmet>
                <title>Sign up</title>
                <meta name="description" content="Landing page where users can sign up/in." />
            </Helmet>
            <form onSubmit={handleSignUp}>
                <div className="Container">
                    <h1>Sign up</h1>
                    <div className="Form">
                        <label>Username</label>
                        <FormInput value={email} type="email" onChange={e => setEmail(e.target.value)}></FormInput>
                        <label>Password</label>
                        <FormInput value={password} type="password" onChange={e => setPassword(e.target.value)}></FormInput>
                        <FormButton type="submit">Sign up</FormButton>
                    </div>
                </div>
            </form>

        </>
    );
}

export default Signup;
