import react, {Component} from 'react';

class ProgressTracker extends Component{
    render(){
        return(
            <div className="progress-tracker">
                <label className="progress-tracker__label">Progress tracker</label>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;