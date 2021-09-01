import React, {Component} from 'react';
import Quote, {SAD} from "../components/Quote";

class Abuse extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    abuse & maltreatment of minors
                </h1></div>

                <Quote quote={"Did you know that in some states, \"maltreatment\" refers to neglect and abandonment and" +
                " term \"abuse\" is used for acts that cause injury."} citation={""} path={SAD}/>

                <p>
                    Approximately 5 children die every day due to abuse. Individuals under 18 are at an increased risk
                    of experiencing abuse and maltreatment when parental/guardian relationships are unhealthy as well
                    as when people with substance use and/ or psychological disorders are a part of home life. Abuse
                    and maltreatment of a minor is classified as increased behavior towards a minor that entails
                    substantial risk of causing harm to one’s person.
                </p>

                <p>
                    There are four primary types of child abuse:
                </p>

                <dl className="indented">
                    <dt>Physical abuse</dt>
                    <dt>Emotional abuse</dt>
                    <dt>Sexual abuse</dt>
                    <dt>Neglect</dt>
                </dl>


                <p>
                    Neglect is the most common form of child abuse, accounting for more than 75% of all cases of
                    child maltreatment. Neglect is also one of the most difficult forms to evidence of and respond to.
                    No minor deserves to experience abuse or maltreatment.
                </p>
            </div>
        );
    }
}

export default Abuse;