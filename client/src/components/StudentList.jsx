import React from 'react';
import { studentRoster } from '../data/student_roster.js';
import Student from './Student.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classList: studentRoster,
    }
  }

  addStudent() {

  }

  render() {
    return (
      <>
        <div className="student-list">
          {this.state.classList.map((student, index) => <Student student={student} key={`hr-lax-49-${student}-${index}`} />)}
        </div>
        <button>Add Student</button>
      </>
    )
  }
}

export default StudentList;