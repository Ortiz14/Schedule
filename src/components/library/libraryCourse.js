import React, {Component} from 'react';
import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component{
    render(){
        return(
            <div className="library-course">
                <div className="library-course__title-arrow">
                    <label className="library-course__title">Problem    Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow"/>
                {/*action button component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>This Course will have extreme problems to test the complexiry of the mind and those who pass the class will have study all the mathamatic theories solve be great mathations</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;