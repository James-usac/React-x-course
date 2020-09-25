import React ,{Component} from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import  Dishdetail from './DishdetailComponent'
import {DISHES} from '../shared/dishes';

class Menu extends Component{
    
  constructor(props) {
    super(props);

    this.state = {
        selectedDish: null,
        comentario: DISHES,
    }
  }

    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
      if (dish != null){
          console.log(dish.id)
          return(
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>   
                </Card>   
              </div>   
              <div className="col-12 col-md-5 m-1">
                  <strong class="float-left">Comments</strong>
                  <br/>
                  <Dishdetail comentario={this.state.comentario[dish.id].comments}/>
              </div>
            </div>
          );
        }else
          return(
              <div></div>
          );
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card  body inverse color="primary" key={dish.id.toString()} value={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle><p class="text-light bg-dark">{dish.name}</p></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
                
            </div>
        );
    }
}

export default Menu;