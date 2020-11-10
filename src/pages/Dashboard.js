import './styles/Dashboard.scss';
import Helmet from 'react-helmet';
import { FormButton } from '../components/FormComponents';
import { auth } from '../firebase';
import { Redirect, withRouter } from 'react-router-dom';
import { AuthContext } from '../Auth';
import { useContext } from 'react';

const Home = ({ history }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard page where users can view their saved recipes. " />
            </Helmet>
            <div className="Dashboard">
                <h1>Hi.</h1>
                <h2>{auth.currentUser.email}  </h2>
                <FormButton onClick={() => {
                    auth.signOut();
                    history.push('/');
                }}>Sign out</FormButton>

            </div>
        </>
    );
}

export default withRouter(Home);
