import React, { Component } from 'react';
import MyForm from "../components/MyForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAccordion from '../components/MyAccordion';
import MyNavbar from '../components/MyNavbar';
import { Button, Card } from 'react-bootstrap';

class Home extends Component {
    state = { 
      email: '',
      select: '',
      checkbox: false,
      area1: '',
      area2: '',
      area3: '',
      textBoxContents: [],
   } 

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, select, checkbox, area1, area2, area3 } = e.target;
    this.setState({
      email: email.value,
      select: select.value,
      checkbox: true,
      area1: area1.value,
      area2: area2.value,
      area3: area3.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  handleSelectChange = (e) => {
    this.setState({select: e.target.value})
  }

  handleCheckboxChange = (e) => {
    let v = this.state.checkbox;
    this.setState({checkbox: !v})
    console.log(this.state.checkbox);
  }

  handleAre1Change = (e) => {
    this.setState({area1: e.target.value})
    const textBoxContents = this.state.textBoxContents;
    textBoxContents[0] = e.target.value
    this.setState({textBoxContents})
  }

  handleAre2Change = (e) => {
    this.setState({area2: e.target.value})
    const textBoxContents = this.state.textBoxContents;
    textBoxContents[1] = e.target.value
    this.setState({textBoxContents})
  }

  handleAre3Change = (e) => {
    this.setState({area3: e.target.value})
    const textBoxContents = this.state.textBoxContents;
    textBoxContents[2] = e.target.value
    this.setState({textBoxContents})
  }

    render() { 
        const { email, select, checkbox, area1, area2, area3} = this.state;

        return (
            <div className="container">
            <MyNavbar menus={this.props.menus} />
            <MyAccordion />
            <div className="row">
              <div className="col-6">
                <MyForm 
                onSubmit={this.handleSubmit}
                onEmail={this.handleEmailChange}
                  onSelect={this.handleSelectChange} 
                  onCheckbox={this.handleCheckboxChange} onArea1={this.handleAre1Change} 
                onArea2={this.handleAre2Change} onArea3={this.handleAre3Change}/>  
              </div>
              <div className="col-6">
                <Card>
                    <Card.Header>
                        <h1>Adatok:</h1>
                    </Card.Header>
                    <Card.Body>
                        <h3>Email: {email}</h3>
                        <h3>Kiválasztott elem: {select}</h3>
                        <h3>Checkbox: {checkbox ? <Button style={{background: 'green'}}>on</Button> : <Button  style={{background: 'red'}}>off</Button>}</h3>
                        <h3>Textarea 1: {area1}</h3>
                        <h3>Textarea 2: {area2}</h3>
                        <h3>Textarea 3: {area3}</h3>
                    </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row mt-5">
              <div className='col'>
                  <MyAccordion data={this.state.textBoxContents} />
              </div>
            </div>
        </div>
        );
    }
}
 
export default Home;