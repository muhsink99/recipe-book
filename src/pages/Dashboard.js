import './styles/Dashboard.scss';
import Helmet from 'react-helmet';
import { FormButton } from '../components/FormComponents';
import { auth, db } from '../firebase';
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { Row, Col } from 'react-bootstrap';
import { React } from 'react';

const Home = ({ history }) => {
    // Load in all the recipes for the currently logged in user 
    useEffect(async () => {
        await db.collection('users').doc(auth.currentUser.uid).collection('recipes').get().then(querySnapshot => {
            const tempDoc = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setRecipes(tempDoc);
        })
    }, []);

    const [recipes, setRecipes] = useState([{}]);
    console.log(recipes);

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard page where users can view their saved recipes. " />
            </Helmet>
            <div className="Dashboard">
                <h1>Recipes</h1>
                <p>Currently logged in as {auth.currentUser.uid}  </p>

                <div>
                    {
                        recipes.map(function (item, index) {
                            return <p>{item.name}</p>
                        })
                    }
                </div>

                <FormButton onClick={() => {
                    auth.signOut();
                    history.push('/');
                }}>Sign out</FormButton>
                <FormButton>Add Recipe</FormButton>
                <Row>
                    <Col xl={4} xs={12}>
                        <RecipeCard></RecipeCard>
                    </Col>
                    <Col xl={4} xs={12}>
                        <RecipeCard></RecipeCard>
                    </Col>
                    <Col xl={4} xs={12}>
                        <RecipeCard></RecipeCard>
                    </Col>
                    <Col xl={4} xs={12}>
                        <RecipeCard></RecipeCard>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default withRouter(Home);
