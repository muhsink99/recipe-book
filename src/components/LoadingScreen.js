import '../pages/styles/Dashboard.scss';
import React from "react";
import { CircleSpinner } from "react-spinners-kit";
import '../pages/styles/Home.scss';

const LoadingScreen = () => {
    return (
        <div className='center'>
            <CircleSpinner size={30} color="#000000" />
        </div>
    );
}

export default LoadingScreen;
