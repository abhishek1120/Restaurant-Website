import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle className="font-weight-bold lead">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="mx-auto my-2 col-12 col-md-5">
                <RenderItem dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;