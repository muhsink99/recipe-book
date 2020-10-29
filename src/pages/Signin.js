import './styles/FormPage.scss';
import Helmet from 'react-helmet';
import { FormInput, FormButton } from '../components/FormComponents';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <>
            <Helmet>
                <title>Sign in</title>
                <meta name="description" content="Landing page where users can sign up/in." />
            </Helmet>
            <div className="Container">
                <h1>Sign in</h1>
                <div className="Form">
                    <label>Username</label>
                    <FormInput></FormInput>
                    <label>Password</label>
                    <FormInput></FormInput>
                    <FormButton>Sign in</FormButton>
                    <span className="bottom-text">Don't have an account? <Link to="/signup">Click here!</Link></span>
                </div>

            </div>
        </>
    );
}

export default Signin;
