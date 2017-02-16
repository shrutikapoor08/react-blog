import React, { Component } from 'react';
import './Expertise.css';

class ExpertiseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pill :"PHP"
    }
    this.selectPill = this.selectPill.bind(this);
  }
  selectPill(event) {
  const {id} = event.target;

  console.log("id", id);
    this.setState({pill: name});
  }
  render() {
    var rows=[];
    rows = this.props.expertise.map((project) => {
      return(<ExpertiseDescription name={project.title} image={project.image} description={project.description} category={project.category} pill={this.state.pill} /> )
    });
    
    return (
      <div className="expertiseContainer">
        <Expertise name="JavaScript" id="JavaScript" image="/images/icons/js.png" onClick={this.selectPill} />
        <Expertise name="PHP" id="PHP" image="/images/icons/php.png" onClick={this.selectPill} />
        <Expertise name="AngularJS" id="AngularJS" image="images/icons/angularjs.png" onClick={this.selectPill} />
       {rows}
    </div>
    );
  }
}

class Expertise extends React.Component {
  render() {
    return (
      <div className="pill"> 
        <img src={this.props.image} alt={this.props.name} />
       </div>
    );
  }
}

class ExpertiseDescription extends React.Component {
  render() {
    var categories = this.props.category;
    console.log("category", categories);
    
    var pill = this.props.pill;
    console.log("pill", pill);
    
    if (!categories.includes(pill)) return null;
    else return (
      <div className="expertiseItem row"> 
        <div className="col-left col-md-4">
          <img src={this.props.image} />
        </div> 
        <div className="col-right col-md-8">
        <p className="h2">{this.props.skills}</p>
        <p> {this.props.description} </p>
        </div>
      </div>

    );
  }
}

export default ExpertiseContainer;
