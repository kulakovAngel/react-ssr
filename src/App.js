import React from 'react';

function App() {
    const [greeting, setGreeting] = React.useState('Hello, React-SSR!');
    return (
        <div className="App">
            <h1 onClick={() => setGreeting('Bye-bue...')}>{greeting}</h1>
        </div>
    );
}

export default App;
