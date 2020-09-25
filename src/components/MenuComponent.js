import React ,{Component} from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component{
    
  // constructor(props) {
  //   super(props);
  // }


    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card  body inverse color="primary" key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle><p class="text-light bg-dark">{dish.name}</p></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
          // /{this.renderDish(this.state.selectedDish)}
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;