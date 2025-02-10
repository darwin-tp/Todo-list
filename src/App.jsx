import React from 'react';
import './App.css';
import Header from './components/Header';
import Todolist from './components/Todolist';
import Button from './components/button';

function App() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center font-mono bg-violet-200'>
            <div className='border-2 w-2x1 rounded-sm bg-pink-200'>
                <Header/>
                <Todolist 
                task={[
                    {button:"Learn React"},
                    {button: "Build a To-Do list"},
                    {button: "Master Javascript"},
                    {button: "Apply for jobs"}
                ]
                }/>
                <Button/>
        </div>
        </div>
    );
}

export default App