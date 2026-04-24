import Message from './message';
import Alert from './components/Alert';
import Button from './components/button';
function App() {


  return (
    <div>
      <Message />
      <Alert>
        <p>This is an alert message.</p>
      </Alert>
      <Button onClick={() => console.log('Button clicked!')}>Click me</Button>
      <Button color='primary' onClick={() => alert('Button clicked!')} >
        Click me
      </Button>
    </div>
  );
}

export default App; 