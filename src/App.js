function App() {
    const handleClick = () => {
        console.log('Clicked')
    };
    return (
        <div>
            <button onClick={handleClick}> Add Animal</button>
        </div>

    );
}

export default App;