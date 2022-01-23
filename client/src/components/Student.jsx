import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      present: false,
      notes: '',
      noteButton: 0,
    }

    this.buttonLabel = ['Add Note', 'Save', 'Edit Note'];

    this.toggleAttendance = this.toggleAttendance.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
  }

  toggleAttendance() {
    this.setState({
      present: !this.state.present,
    })
  }

  handleNotes() {
    if(!this.state.noteButton || this.state.noteButton === 2) {
      this.setState({ noteButton: 1 })
    } else if(this.state.noteButton === 1) {
      this.setState({ noteButton: 2 })
    }
  }

  renderForm() {
    if(this.state.noteButton === 1) {
      return (
        <textarea
          value={this.state.notes}
          onChange={(event) => this.setState({ notes: event.target.value })}
        ></textarea>
      )
    } else {
      return (
        <p>
          {this.state.notes}
        </p>
      )
    }
  }


  render() {
    return (
      <div className="student" style={{ backgroundColor: this.state.present ? 'RGBA(10,245,146,0.25)' : 'RGBA(255,41,0,0.15)' }}>
        <div>
          <input type="checkbox" className="checkbox" onChange={this.toggleAttendance}></input>
          <h3>{this.props.student}</h3>
        </div>
        <div className="notes-container">
          {this.renderForm()}
        </div>
        <button onClick={this.handleNotes} >{this.buttonLabel[this.state.noteButton]}</button>
      </div>
    )
  }
}

export default Student;