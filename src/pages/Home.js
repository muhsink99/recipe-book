import './styles/Home.scss';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { FormButton } from '../components/FormComponents';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name="description" content="Landing page where users can sign up/in." />
            </Helmet>
            <div className="Home">
                <h1>Recipe book</h1>
                <p>Keep track of your favourite recipes across the web</p>
                <Link to='/signup'>
                    <FormButton type="button" class="btn btn-dark">Sign up</FormButton>
                </Link>
                <Link to='signin'>
                    <FormButton type="button" class="btn btn-dark">Sign in</FormButton>
                </Link>
            </div>
        </>
    );
}

export default Home;
