import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card,Button,Row,Col} from 'react-bootstrap'
// import { response } from 'express';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flowerArr: []
    }
  }

  componentDidMount = async () => {
    await axios.get(`http://localhost:8000/allFlower`)
      .then(response => {
        this.setState({
          flowerArr: response.data
        })
        console.log(response.data);
      }).catch(error => console.log(error.message))
  }

  addtoFav = async (item) => {
    const reqBody = {
      instructions: item.instructions,
      photo: item.photo,
      name: item.name,
    }
    await axios.post(`http://localhost:8000/addFav`, reqBody)
  }

  render() {
    return (
      <>
        <h1>API Flowers</h1>
        <div>
        <Row xs={1} md={4} className="g-4">

          {
            this.state.flowerArr.map(item => {
              return (
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="{item.photo}" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.instructions}
                    </Card.Text>
                    <Button variant="primary">Add to Fav</Button>
                  </Card.Body>
                </Card>
                </Col>
              )
            })


          }

          </Row>
        </div>


      </>
    )
  }
}

export default Home;
