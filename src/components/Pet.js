import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoption = this.handleAdoption.bind(this);
  }

  handleAdoption = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }
  
  handleAdoption = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Name: {this.props.pet.name}
            Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
<<<<<<< HEAD
          { !this.props.isAdopted ?
=======
          { !this.props.isAdopted ? 
>>>>>>> 594d3d560d633c2694024d33b5a2019a5a6ee0c6
          <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
