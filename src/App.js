import React from 'react';
import DogPhoto from './components/Dogsphotos';
import DogsBreeds from './components/Getdogs';

function App() {
  const [selectedDog, setSelectedDog] = React.useState(null);
  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }
  return (
    <div>
      <h2>Building Query components 🚀</h2>
      {selectedDog && <DogPhoto breed={selectedDog} />}
      <DogsBreeds onDogSelected={onDogSelected} />
    </div>
  );
}
export default App;
