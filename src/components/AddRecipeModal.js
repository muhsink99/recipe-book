import '../pages/styles/RecipeCard.scss';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FormInput, FormButton } from './FormComponents';
import { db, auth } from '../firebase';


const AddRecipeModal = ({ showing, close }) => {
    const { register, handleSubmit, errors } = useForm(); // initialize the form

    const handleAddRecipe = async (data) => {
        await db.collection('users').doc(auth.currentUser.uid).collection('recipes').add(data).then(function () {
            close(); // Close this modal
        })
    }

    if (showing) {
        return (
            <>
                <Modal show={showing} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Recipe</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={handleSubmit(handleAddRecipe)}>
                            <div className="Form">
                                <label>Name</label>
                                <FormInput ref={register({ required: true })} name="name" />
                                {errors.name &&
                                    <div className='alert alert-danger'>
                                        Name is a required field
                               </div>}
                                <label>Description</label>
                                <FormInput ref={register({ required: true })} name="description" />
                                <label>Link (Youtube link, blog link, etc..)</label>
                                <FormInput ref={register({ required: true })} name="link" />
                                <label>Servings</label>
                                <FormInput ref={register({ required: true })} name="servings" type="number" />
                                <label>Prep Time (minutes)</label>
                                <FormInput ref={register({ required: true })} name="prepTime" type="number" />
                            </div>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={e => close(e)}>Close</Button>
                                <Button type="submit" variant="primary">Add Recipe</Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>

                </Modal>
            </>
        );

    } else {
        return null;
    }
}

export { AddRecipeModal }
