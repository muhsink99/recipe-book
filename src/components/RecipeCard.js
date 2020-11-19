import '../pages/styles/RecipeCard.scss';
import { FormInput, FormButton } from './FormComponents';

const RecipeCard = ({ data }) => {
    return (
        <>
            <div className='CardContainer'>
                <div>
                    <h4>
                        Recipe Name
                    </h4>
                    <p>
                        A tradiitonal tomato sauce for pasta dishes
                        A tradiitonal tomato sauce for pasta dishes

                        A tradiitonal tomato sauce for pasta dishes
                        A tradiitonal tomato sauce for pasta dishes
                        A tradiitonal tomato sauce for pasta dishes

                   </p>
                </div>
                <div>
                    <FormButton>Go to recipe</FormButton>
                </div>
                <label className='BottomText'>10m</label>
                <label className='BottomText'>Serves 4</label>
            </div>
        </>
    );

}

export { RecipeCard }
