import './styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../components/FormComponents';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <Helmet>
                <title>Sign up</title>
                <meta name="description" content="Landing page where users can sign up/in." />
            </Helmet>
            <div className="Container">
                <h1>Sign up</h1>
                <div className="Form">
                    <label>Username</label>
                    <FormInput></FormInput>
                    <label>Password</label>
                    <FormInput type="password"></FormInput>
                    <label>Confirm Password</label>
                    <FormInput type="password"></FormInput>
                    <FormButton>Sign up</FormButton>
                </div>
            </div>
        </>
    );
}

export default Signup;
