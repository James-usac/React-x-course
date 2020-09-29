import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
     Button, Modal, ModalHeader, ModalBody, Row, Label, Col  } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Formulario extends Component{
    constructor(props){
        super(props)

        this.state = {
            isModalOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return (
            <div>
                <Button type="submit" onClick={this.toggleModal}
                    className="fa fa-pencil fa-lg btn btn-dark m-1 float-lg-right"
                >Submit Comment</Button>
                <div className="col-12 col-md-9">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submmit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="Rating">Rating</Label>
                                    <Control.select model=".selected" type="number" name="contactType"
                                        className="form-control custom-select mr-sm-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                             </Row>
                             <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" id="youname" name="youname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".message" id="message" name="message"
                                            rows="6"
                                            className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
            </div>
        )
    }
}

function RenderDish({ dish }) {
    
    return (
        <div>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                {comments.map((dish) => (
                    <Card className="m-1">
                        <CardText>{dish.comment}</CardText>
                        <CardText>--{dish.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dish.date)))}</CardText>
                    </Card>
                ))}
                <Formulario></Formulario>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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