import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;
