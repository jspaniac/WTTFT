import React, {Component} from 'react';

class Health extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    physical health concerns
                </h1></div>

                <p>
                    Affordable health care options are available to youth. If you are 14 years-old or older and do not
                    want a parent or guardian to know you are seeking services, make sure to ask the agencies about
                    their policies regarding confidentiality.
                </p>

                <p>
                    School-based health centers are an additional option for students. Visit your school’s health
                    center or talk with your school nurse for more information.
                </p>
            </div>
        );
    }
}

export default Health;