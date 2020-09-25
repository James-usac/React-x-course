import React ,{Component} from 'react'
import { Card, CardText } from 'reactstrap';

class Dishdetail extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            nuevo: null
        }
    }

    render(){
        const comentarios = this.props.comentario.map((dish) => {
            return (
                <card>
                    <CardText>{dish.comment}</CardText>
                    <CardText>--{dish.author},{dish.date}</CardText>
                </card>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {comentarios}
                </div>
            </div>
        );
    }
}

export default Dishdetail;