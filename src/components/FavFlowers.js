import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap'

class FavFlowers extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      Favflower :[],
      show:false
    }
  }

  componentDidMount = async () => {
    await axios.get(`http://localhost:8000/getFav`)
    .then(Response => {
      this.setState({
        Favflower : Response.data
      })
    }).catch(error => {
      console.log(error.message)
    })
  }

  deleteFav = async (e, item) =>{
    e.preventdefault()
    await axios.delete(`http://localhost:8000/deleteFav?_id=${item._id}`)
    .then(Response => {
      this.setState({
        Favflower : Response.data
      })
    }).catch(error => {
      console.log(error.message);
    })
  }

  handelUpdata = async (e,item) => {
    e.preventdefault()
    const reqBody = {
      instructions: e.target.instructions.value,
      photo: e.target.photo.value,
      name: e.target.name.value,
    }
    await axios.put(`http://localhost:8000/updataFav`, reqBody)
    .then(Response => {
      this.setState({
        Favflower : Response.data
      })
    }).catch(error => {
      console.log(error.message);
    })

  }

  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>  
       {this.state.Favflower.map(item => {
         return(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Img variant="top" src="{item.photo}" />
            <Card.Text>
            {item.instructions}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
         )
       })} 
      </>
    )
  }
}

export default FavFlowers;
