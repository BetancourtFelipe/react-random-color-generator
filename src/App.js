import './App.css';
import useGenerateRandomColor from './useGenerateRandomColor';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#' + color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          padding: '20px',
          borderRadius: '40px',
          backgroundImage: '(#a8edea 0%, #fed6e3 100%)',
          fontSize: 'smaller',
        }}
        onClick={generateColor}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
