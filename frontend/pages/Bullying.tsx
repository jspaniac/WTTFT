import React, {Component} from 'react';
import Quote, {MIND} from "../components/Quote";

class Bullying extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    bullying & cyberbullying
                </h1></div>

                <Quote quote={"When bystanders intervene on behalf of someone being bullied at school, the bullying " +
                "stops over 50% of the time"} citation={"~Stopbullying.gov"} path={MIND}/>

                <p>
                    Bullying is harmful behavior that not only hurts people in the present but can also have
                    long-lasting, negative effects on everyone involved. About 20% of students report experiencing
                    bullying or feeling unsafe at schools in Washington State. Cyber- bullying can worsen these
                    problems as bullies can antagonize their victims outside of school and anonymously. As of January
                    2020, Washington State law prohibits electronic, written, verbal, or physical acts of harassment,
                    intimidation, and bullying (HIB) in schools that do one or more of the following:
                </p>

                <dl className="indented">
                    <dt>Physically harm a student or damage the student’s property</dt>
                    <dt>Have the effect of substantially interfering with a student’s education</dt>
                    <dt>Are so severe, persistent or pervasive that they create an intimidating or threatening
                        educational environment</dt>
                    <dt>Have the effect of substantially disrupting the orderly operation of the school</dt>
                </dl>

                <p>
                    Schools in Washington State are required to create and follow procedures that will intervene on
                    behalf of students who are experiencing bullying, so you can always start by speaking with a
                    teacher, counselor, or administrator at your school. If you don’t feel comfortable talking about
                    it at school, give us a call at <a href="tel:1-866-833-6546">1.866.833.6546</a> to connect with another teen or check out the
                    resources below.
                </p>
            </div>
        );
    }
}

export default Bullying;