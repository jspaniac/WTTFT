import React, {Component} from 'react';
import Quote, {HURT} from "../components/Quote";

class Domestic extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    dating & domestic violence
                </h1></div>

                <Quote quote={"Did you know that 77% of rapes are committed by someone who is known to the survivor?"}
                       citation={""} path={HURT}/>

                <p>
                    Dating violence is a pattern of abusive behaviors such as emotional, verbal, psychological,
                    physical, or sexual abuse by a romantic partner that is used to exert power and control. Dating
                    violence tends to become more severe with time as the abuser tries to increase their power and
                    control. There are many forms of dating abuse and unhealthy behaviors. Common types include:
                </p>

                <h4>
                    Six Common Types Include:
                </h4>
                <dl className="indented">
                    <dt>Physical abuse</dt>
                    <dt>Emotional/Verbal abuse</dt>
                    <dt>Sexual abuse</dt>
                    <dt>Stalking</dt>
                    <dt>Digital abuse/cyberbullying</dt>
                    <dt>Financial abuse</dt>
                </dl>

                <h4>
                    Characteristics Of An Abuser Can Include:
                </h4>
                <dl className="indented">
                    <dt>- Blaming you for their own abusive behavior</dt>
                    <dt>- Seeing you as property or a sex object, rather than as a person</dt>
                    <dt>- Threatening to commit suicide or self-harm if you leave</dt>
                    <dt>- Having a bad and unpredictable temper</dt>
                    <dt>- Physical threats and actions that hurt you</dt>
                    <dt>- Threatening to harm or take away your children</dt>
                    <dt>- Constantly checking on you or monitoring you</dt>
                    <dt>- Controlling what you do, where you go, or what you wear</dt>
                    <dt>- Belittling comments</dt>
                </dl>

                <h4>
                    Characteristics Of Individuals Being Abused Can
                    Include:
                </h4>
                <dl className="indented">
                    <dt>- Seeming afraid of anxious to please their partner</dt>
                    <dt>- Self-isolation or avoidance of gatherings</dt>
                    <dt>- Low self-esteem</dt>
                </dl>

                <p>
                    Fear, threats, shame, and the belief that an abuser’s behavior will change often contribute to the
                    victim feeling unsure about talking to someone about their situation. It is important to remember
                    that there is support available. No one deserves to feel unsafe in a romantic relationship.
                </p>
            </div>
        );
    }
}

export default Domestic;