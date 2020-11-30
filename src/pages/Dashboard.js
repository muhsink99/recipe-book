import './styles/Dashboard.scss';
import Helmet from 'react-helmet';
import { Emoji } from '../components/Emoji';
import { auth, db } from '../firebase';
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { AddRecipeModal } from '../components/AddRecipeModal';
import { Row, Col } from 'react-bootstrap';
import { React } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { IconButton } from '../components/IconButton';
import { FormInput } from '../components/FormComponents';


const Home = ({ history }) => {
    // Load in all the recipes for the currently logged in user 
    useEffect(async () => {
        await db.collection('users').doc(auth.currentUser.uid).collection('recipes').get().then(querySnapshot => {
            const tempDoc = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setRecipes(tempDoc);
            setLoading(false);
        })
    });

    const [recipes, setRecipes] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [addRecipeModal, setAddRecipeModal] = useState(false);

    const closeAddRecipeModal = () => {
        setAddRecipeModal(false);
    }

    const openAddRecipeModal = () => {
        setAddRecipeModal(true);
    }

    const signOut = () => {
        auth.signOut();
        history.push('/');
    }

    if (loading) {
        return (
            <LoadingScreen />
        )
    } else {
        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                    <meta name="description" content="Dashboard page where users can view their saved recipes. " />
                </Helmet>
                <div className="Dashboard">
                    <AddRecipeModal showing={addRecipeModal} close={closeAddRecipeModal} />
                    <div class="actionPanel">
                        <h1><Emoji symbol="📖" />  Recipes</h1>
                        <p>Currently logged in as {auth.currentUser.email}  </p>
                        <div>
                            <IconButton action={openAddRecipeModal} icon={['fa', 'plus']} />
                            <IconButton action={signOut} icon={['fa', 'sign-out-alt']} />
                        </div>
                        <FormInput />
                    </div>

                    {/* Iterate thorugh each recipe and render them as RecipeCard components. */}
                    <Row>
                        {
                            recipes.map(function (recipe, index) {
                                console.log(recipe);
                                return (
                                    <Col xl={4} md={6} xs={12}>
                                        <RecipeCard recipe={recipe}></RecipeCard>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>
            </>
        );
    }
}

export default withRouter(Home);
