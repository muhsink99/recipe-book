import './styles/Home.scss';
import Helmet from 'react-helmet';
import { FormButton } from '../components/FormComponents';
import { auth } from '../firebase';
import { Redirect, withRouter } from 'react-router-dom';

const Home = ({ history }) => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard page where users can view their saved recipes. " />
            </Helmet>
            <div className="Home">
                <h1>Hi.</h1>
                <FormButton onClick={() => {
                    auth.signOut();
                    history.push('/');
                }}>Sign out</FormButton>
            </div>
        </>
    );
}

export default withRouter(Home);
