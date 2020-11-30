
/**
 * IconButton - A component that takes the follow params: 
 * action (func): Takes in an external function to be executed outside of the component 
 * icon ([...]): an array containing FontAwesome icon data (e.g. ['fa', 'faCoffee'])
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../pages/styles/IconButton.scss';
import styled from 'styled-components'
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';


const Background = styled.div`
    background-color: black;
    color: white; 
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    width: 75px;
    height: 28px;
    justify-content: center;
    display: flex;
    :hover { 
        cursor: pointer;
    }
`;

const IconButton = ({ icon, action, colour }) => {
    return (
        <Background>
            <FontAwesomeIcon icon={icon} size="xs"
                onClick={e => action(e)}
            />
        </Background>
    );
}

export { IconButton }
