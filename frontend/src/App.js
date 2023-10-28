import React from 'react';
import BugsTable from './features/bugs/components/bugsTable';

import BugForm from './features/bugs/components/bugForm';

function App() {
  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <BugForm />
      <BugsTable />
    </div>
  );
}

export default App;
