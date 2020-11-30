import '../pages/styles/RecipeCard.scss';
import { Row, Col } from 'react-bootstrap';
import { IconButton } from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, db } from '../firebase';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


let recipesRef = 0;

const RecipeCard = ({ recipe }) => {
    const DeleteRecipe = async () => {
        if (auth.currentUser) { // Check if a user is currently logged in. 
            recipesRef = db.collection('users').doc(auth.currentUser.uid).collection('recipes');
        }
        confirmAlert({
            title: 'Delete recipe',
            message: 'You cannot reverse this action!',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => { await recipesRef.doc(recipe.id).delete(); }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
        // 
    }

    return (
        <>
            <div className='CardContainer'>
                <Row>
                    {/* General recipe information */}
                    <Col sm={8}>
                        <div>
                            <h4>
                                {recipe.name}
                            </h4>
                            <p>
                                {recipe.description}
                            </p>
                        </div>
                        <div className="BottomText">
                            <FontAwesomeIcon icon={['fa', 'utensils']} /> <label>Serves {recipe.servings} </label>
                        </div>
                        <div className="BottomText">
                            <FontAwesomeIcon icon={['fa', 'clock']} /> <label> {recipe.prepTime} mins </label>
                        </div>
                    </Col>
                    {/* Action panel (open recipe, delete recipe, etc..) */}
                    <Col sm={4}>
                        <Link to={`//${recipe.link}`} target="_blank" >
                            <IconButton action={() => { }} icon={['fa', 'link']} />
                        </Link>
                        <IconButton action={() => { DeleteRecipe() }} icon={['fa', 'trash']} />
                    </Col>
                </Row>
            </div>
        </>
    );

}

export { RecipeCard }
