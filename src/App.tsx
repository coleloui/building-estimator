import './App.css';
import { NavbarComponent } from './components/navigation/navbar';

function App(): JSX.Element {
  return (
    <div className='App'>
      <NavbarComponent />
      <header className='App-header'>
        <p className='text-xl font-bold underline text-white'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
