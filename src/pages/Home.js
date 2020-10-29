import './styles/Home.scss';
import Helmet from 'react-helmet';

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
                <button type="button" class="btn btn-dark">Sign up</button>
                <button type="button" class="btn btn-dark">Sign in</button>
            </div>
        </>
    );
}

export default Home;
