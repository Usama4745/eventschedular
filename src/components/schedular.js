import React, { Component } from 'react';
import './schedular.css';


class Schedular extends Component {
    state = {
        timecounter: 1
    };
    renderevents(value) {
        var indents = [];
        for (var i = 0; i < 6; i++) {
            var month;
            if (value.month === 'Jan') {
                month = 0
            } else {
                month = 3
            }
            if (month + value.days - 1 === i) {
                indents.push(<td className={value.color === 'blue' ? 'events' : 'eventsgrey'}>{value.event} events | {value.tasks} tasks</td>)
                continue;
            }

            indents.push(<td>&nbsp;</td>)
        }
        return indents
    }
    
    render() {
        this.props.events.sort(function (a, b) {
            return parseFloat(a.time) - parseFloat(b.time);
        });
        return (
            <div>
                <div className='container'>
                    <div className="row aquacolor">
                        <div className="col-md-12 col-sm start-text aquacolor">
                            2019
                    </div>
                    </div>
                    <div className="row aquacolor">
                        <div className="col-md-4 col-sm-4 start-text">
                            Jan
                    </div>
                        <div className="col-md-4 col-sm-4">
                            Feb
                    </div>
                        <div className="col-md-4 col-sm-4 end-text">
                            March
                    </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-7 col-sm-7 fillcolorblue">
                            &nbsp;
                        </div>
                        <div className="col col-md-4 col-sm-4 fillyellowcolor">
                            &nbsp;
                        </div>
                        <div className="col col-md-1 col-sm-1 fillpinkcolor">
                            &nbsp;
                        </div>
                    </div>
                    {this.props.events.map((item, index) => (
                        <div className="row">
                            <div className="col-md-12">
                                <table className="fillavailablespace">
                                    <tbody>
                                        <tr>
                                            {this.renderevents(item)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    }
}
export default Schedular;