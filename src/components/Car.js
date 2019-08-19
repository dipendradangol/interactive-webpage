import React from 'react';
import car from '../car.jpg'
import './Car.css';

class Car extends React.Component {
    render(){
        return (
            <div className=" car ">
                <img src={car} className={"car-image"} alt={"Car"}></img>
                <div className = "container">
                    <h3>Tuned car <span
                    className="horse-power">500</span></h3>
                    <p>
                    Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been 
                    </p>
                </div>
            </div>
        )
    }
}

export default Car;