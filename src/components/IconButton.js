
/**
 * IconButton - A component that takes the follow params: 
 * action (func): Takes in an external function to be executed outside of the component 
 * icon ([...]): an array containing FontAwesome icon data (e.g. ['fa', 'faCoffee'])
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../pages/styles/IconButton.scss';

const IconButton = ({ icon, action, text }) => {
    return (
        <>
            <FontAwesomeIcon icon={icon}
                onClick={e => action(e)}
                className="IconButton"
            />
            {text}
        </>
    );
}

export { IconButton }
