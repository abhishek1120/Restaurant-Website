import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';


function ShowDish({ dish }) {
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle className="lead font-weight-bold">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

// date converting function
function convertDateFun({ datestamp }) {
    const date = new Date(datestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// rendering comments in list
function ShowComments({ comments }) {
    if (comments == null || comments.length === 0) {
        return (
            <div></div>
        );
    }

    const cmnts = comments.map((comment) => {
        return (
            <li>
                <p className="font-weight-bold">{comment.comment}</p>
                <p className="font-weight-bold">-- {comment.author}, {convertDateFun(comment.date)}</p>
            </li>
        );
    });

    return (
        <div>
            <h2 className="font-weight-bold text-dark">Comments</h2>
            <ul className="list-unstyled">
                {cmnts}
            </ul>
        </div>
    );
}



function DishDetail(props) {
    if (props.dish == null) {
        return (
            <div></div>
        );
    }
    else {
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
                    <div className="col-12 col-md-5 mx-auto my-2">
                        <ShowDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 mx-auto my-2">
                        <ShowComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;