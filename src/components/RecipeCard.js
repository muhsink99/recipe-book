import '../pages/styles/RecipeCard.scss';
import { Row, Col } from 'react-bootstrap';
import { IconButton } from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className='CardContainer'>
                <Row>
                    {/* General recipe information */}
                    <Col sm={9}>
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
                    <Col sm={3}>
                        <IconButton action={() => { }} icon={['fa', 'link']} />
                    </Col>
                </Row>
            </div>
        </>
    );

}

export { RecipeCard }
