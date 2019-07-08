import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      cats: []
    };
    this.loadCats();
  }

  loadCats = e => {
    console.log('load')
    fetch("http://localhost:3001/api/cats")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({cats: data.cats});
    })
  }

  addCat = e => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      let newCat = {};
      newCat.title = data[0].id;
      newCat.img_url = data[0].url;
      data = {cat: newCat};
      fetch("http://localhost:3001/api/cats", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        let cats = [data.cat, ...this.state.cats];
        this.setState({cats});
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.addCat}>Primary</Button>
        {this.state.cats[0] ? 
          <CardColumns style={{columnCount: 4}}>
            {this.state.cats.map(cat =>
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={cat.img_url} />
                <Card.Body>
                  <Card.Text>
                    {cat.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </CardColumns>
        : <p>no kitties :'(</p>}
      </div>
    );
  }
}

export default App;
