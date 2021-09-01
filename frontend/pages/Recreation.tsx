import React, {Component} from 'react';

class Recreation extends Component<{}, {}> {
    render() {
        return (
            <div className="orange">
                <div className="sticky"><h1>
                    recreation & youth involvement
                </h1></div>

                <p>
                    If you are bored, want to make more friends, or are looking for a fun place to hang out after
                    school or on weekends, there are a number of places for you. Community and recreational centers,
                    drop-in groups, classes, and sports leagues for youth are located throughout the Puget Sound area.
                </p>

                <p className="indented"><em>
                    For more information regarding other recreation options, contact your local parks and recreation
                    department.
                </em></p>
            </div>
        );
    }
}

export default Recreation;