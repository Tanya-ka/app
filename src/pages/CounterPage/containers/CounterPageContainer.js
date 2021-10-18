import React, {Component} from 'react';
import Counter from '../components/Counter';



class CounterPageContainer extends Component {
    state = {
        countValue: 0,
        parityType: 'Введено чётное число',
    };

    handleIncrement =() => {
        const newValue = this.state.countValue + 1;
            if (newValue % 2 === 0){
                this.setState({countValue: newValue, parityType: 'Введено чётное число'});
                       } else {
                        this.setState({countValue: newValue, parityType: 'Введено нечётное число'});
                     }       
    };

    handleDecrement =() => {
        const newValue = this.state.countValue - 1;
            if (newValue % 2 === 0){
                this.setState({countValue: newValue, parityType: 'Введено чётное число'});
                       } else {
                        this.setState({countValue: newValue, parityType: 'Введено нечётное число'});
                     }
                     if (newValue < 0){
                        this.setState({...this.state, countValue: 0});
                               } 
    };

    handleReset =() => {
        this.setState({countValue: 0, parityType: 'Введено чётное число'});
    };
    

    render() {
        return <Counter 
        countValue={this.state.countValue} 
        handleIncrement={this.handleIncrement} 
        handleDecrement={this.handleDecrement} 
        handleReset={this.handleReset}  
        parityType={this.state.parityType}
        />
     } 
}

export default CounterPageContainer;