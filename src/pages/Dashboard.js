import './styles/Home.scss';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { FormButton } from '../components/FormComponents';

function Home() {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard page where users can view their saved recipes. " />
            </Helmet>
            <div className="Home">
                <h1>Hi.</h1>
            </div>
        </>
    );
}

export default Home;
