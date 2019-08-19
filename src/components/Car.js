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
                     the industry's standard dummy 
                     text ever since the 1500s, when 
                     an unknown printer took a galley of 
                     type and scrambled it to make a type 
                     specimen book. It has survived not only 
                     five centuries, but also the leap into 
                     electronic typesetting, remaining 
                     essentially unchanged. It was popularised 
                     1960s with the release of Letraset sheets 
                     containing Lorem Ipsum passages, and more
                    recently with desktop publishing software 
                    </p>
                </div>
            </div>
        )
    }
}

export default Car;