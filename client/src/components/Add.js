import React, { useState } from 'react';
import "./Board/board.css";

const Add = ({ buttonText, onSubmit }) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            onSubmit(inputValue);
            setShowInput(false);
            setInputValue('');
        }
    };

    return (
        <div>
            {!showInput ? (
                <button onClick={handleButtonClick} className='btn-plus'>+</button>
            ) : (
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={`Enter ${buttonText}`}
                        className="inputs"
                    />
                    <button onClick={handleSubmit} className='btn-submit'>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Add;
