import React, {Component} from 'react';
import Quote, {SAD} from "../components/Quote";

class Suicide extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    suicide & self-harm (non-suicidal self-injury)
                </h1></div>

                <Quote quote={"Did you know that there are almost two suicide deaths every week for people under the " +
                "age of 19 in Washington state"} citation={"~ WA Department of Health"} path={SAD}/>

                <h4>Suicide Warning Signs for Suicide Include</h4>
                <dl>
                    <dt>Changes in eating and sleeping patterns</dt>
                    <dt>Dropping hints, talking about suicide, or making a plan</dt>
                    <dt>Talking about feeling hopeless, trapped, or like a burden </dt>
                    <dt>Withdrawing or isolating from close friends and family</dt>
                    <dt>Giving away prized possessions</dt>
                    <dt>Being very obsessive and perfectionistic</dt>
                    <dt>Acting anxious or agitated</dt>
                    <dt>Engaging in risky behaviors (driving recklessly, increased substance use, etc.)</dt>
                </dl>

                <h4>Consider The Following Questions To Help You Determine The Urgency</h4>
                <dl>
                    <dt>How many warning signs are present?</dt>
                    <dt>How long have the warning signs been present?</dt>
                    <dt>How extreme or severe are the warning signs?</dt>
                </dl>

                <p>
                    If you are concerned that you or someone you know may be suicidal, it is important to address the
                    situation immediately. Mentioning suicide will not give the person the idea or push them over the
                    edge. They may feel relieved that someone is willing to talk about what they’re thinking and feeling.
                    Sharing your concerns can prevent a suicide attempt from occurring and can save a life.
                </p>

                <h4>How to Help Step One Is A Great Way To Ask About Any Issue</h4>
                <p>1. Show you care</p>
                <dl className="indented">
                    <dt>Talk to the person you are concerned about in a caring manner</dt>
                    <dt>Be specific about the warning signs you have noticed</dt>
                    <dt>Listen without judgement suicide & self-harm (nonsuicidal self-injury)</dt>
                </dl>

                <p>2. Ask the question directly</p>
                <dl className="indented">
                    <dt>"Are you thinking about suicide/killing yourself?"</dt>
                </dl>

                <p>3. Talk to an adult you trust</p>
                <dl className="indented">
                    <dt>It is important that you do not keep this secret for someone. If someone is talking about
                        being suicidal, they are asking for help.</dt>
                </dl>

                <p>
                    These are some initial steps toward ongoing mental health care. Every situation regarding suicide
                    is different. Call Teen Link @ <b>1.866.833.6546</b> to talk to a trained phone worker in more detail
                    about how to get help. If you need immediate crisis intervention services or feel like you need to
                    talk to someone right away, these are numbers you can call to discuss your concerns:
                </p>

                <h4>Self-Harm (Nonsuicidal Self-injury)</h4>
                <p>
                    Some people experiencing mental challenges such as depression or anxiety turn to self-harm as a
                    way of releasing and managing emotions. In most cases, these actions are not done as suicide
                    attempts but as coping methods for people to help manage the mental pain they are feeling. Some
                    people self-harm to numb their feelings while others may harm themselves to feel something.
                    Cutting, scratching, and burning are common ways people will harm themselves, but self-harm
                    includes any intentional act that a person does to hurt their body. Finding alternatives to
                    self-harm can be challenging, but journaling about the emotions and events that lead to the
                    behaviors can help a person understand why they do it, what other activities could help satisfy
                    those emotional needs, and how to talk to someone about getting support. Creative outlets like
                    drawing and painting can also be helpful ways of expressing and describing feelings.
                </p>

                <p>
                    When talking to someone about self-harm, it’s important to stay focused on the harmful behavior
                    itself and not jump to conclusions about suicide. For example, it is more beneficial to ask about
                    what specific actions and events trigger their urges to self-harm than to ask if they harm
                    themselves because they’re suicidal. If you have any questions or concerns about self-harm, give
                    us a call or text at <b>1.866.833.6546</b>.
                </p>
            </div>
        );
    }
}

export default Suicide;