import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null)
    {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else
        return (
            <div></div>
        );
}

function RenderComments({comments}) {
    if (comments != null) {

        return (
            <div>
                {comments.map((dish) => (
                    <Card className="m-1">
                        <CardText>{dish.comment}</CardText>
                        <CardText>--{dish.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dish.date)))}</CardText>
                    </Card>
                ))};
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

const  Dishdetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4><strong class="float-left">Comments</strong></h4>
                        <br />
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        )
    }
    else
        return (
            <div></div>
        );
}


export default Dishdetail;