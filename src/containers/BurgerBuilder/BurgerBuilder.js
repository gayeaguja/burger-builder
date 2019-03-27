import React, {Component} from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            chicken: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <div> Build Control </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;