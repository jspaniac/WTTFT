import React, {Component} from 'react';
import Quote, {TEXT} from "../components/Quote";

class Legal extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    legal services & community support for youth
                </h1></div>

                <Quote quote={"Did you know: Washington State uses At-Risk Youth (ARY) and Child in Need of Services " +
                "(CHINS) petitions to help young people and their families work through conflict and receive additional " +
                "legal support."} citation={""} path={TEXT}/>

                <p>
                    Find out more about legal options at <a href="https://www.washingtonlawhelp.org/issues/youth-law-education/at-risk-children" rel="noopener noreferrer" target="_blank">www.washingtonlawhelp.org/issues/youth-law-education/at-risk-children</a> Children
                    and young adults who become involved in crime, domestic abuse, drugs and alcohol, early
                    pregnancy, school-related problems, or suicide may find themselves without resources to help them
                    recover, grow, and thrive. Terms such as at-risk, at-promise, upward, or opportunity youth are often
                    used, but every young person deserves an opportunity at the life they de- sire. These resources can
                    help connect youth experiencing these problems with the services they need.
                </p>

                <h4>Legal Services</h4>
                <p>
                    Human and civil rights protect people long before they turn 18.
                </p>
            </div>
        );
    }
}

export default Legal;