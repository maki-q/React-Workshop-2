import React from 'react';
import StudentList from './StudentList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <img src="./hrlogo.png"></img>
          <h1>HR-LAX49 Attendance Roster</h1>
          <div className="filler"></div>
        </header>
        <StudentList />
      </div>
    )
  }
}

export default App;