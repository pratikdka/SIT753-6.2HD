import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const clear = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
                <div className="counter">
                    <button onClick={decrement}>-</button>
                        <input type="text" value={count} readOnly />
                            <button onClick={increment}>+</button>
                </div>
                    <button onClick={clear} className="clear-button">
        Clear
                    </button>
        </div>
    );
}

export default App;
