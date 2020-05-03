import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/Dishes';
import { LEADERS } from '../shared/Leaders';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            comments: COMMENTS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const AboutPage = () => {
            return <About leaders={this.state.leaders} />
        }


        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/aboutus" component={AboutPage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
