import '../pages/styles/RecipeCard.scss';
import { FormInput, FormButton } from './FormComponents';

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className='CardContainer'>
                <div>
                    <h4>
                        {recipe.name}
                    </h4>
                    <p>
                        {recipe.description}
                    </p>
                </div>
                <div>
                    <FormButton href={recipe.link}>Go to recipe</FormButton>
                </div>
                <label className='BottomText'>{recipe.prepTime}m</label>
                <label className='BottomText'>Serves {recipe.servings}</label>
            </div>
        </>
    );

}

export { RecipeCard }
