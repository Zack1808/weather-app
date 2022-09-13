import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react';

// Importing the costume made components
import TopButtons from './TopButtons';
import Inputs from './Inputs';
import TimeAndLocation from './TimeAndLocation';

// Creating the App component
const App = () => {
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopButtons />
            <Inputs />
            
            <TimeAndLocation />
        </div>
    )
};

export default App;