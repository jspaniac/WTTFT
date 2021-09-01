import React, {Component} from 'react';
import Quote, {PARTY} from "../components/Quote";

class Education extends Component<{}, {}> {
    render() {
        return (
            <div className="orange">
                <div className="sticky"><h1>
                    education
                </h1></div>

                <Quote quote={"Did you know that with support from parents/guardians, students can opt-out of " +
                "standardized testing in Washington State."} citation={"~ Opt Out Washington"} path={PARTY}/>

                <p>
                    Many teens have difficulties at school that are outside of their control and need more support for
                    their education than what they can get at school. These agencies can provide a wide range of
                    services to help support young people with their education goals, including tutoring, testing for
                    learning disabilities, support for English Language Learners (ELL), and alternatives to traditional
                    graduation, such as the General Education Development (GED) test. Open Doors programs provide
                    graduation and GED support to people up to 21 years old. (OSPI)
                </p>

                <p>
                    You can call also call your local 2-1-1 for referrals in addition to contacting any of the following
                    organizations:
                </p>
            </div>
        );
    }
}

export default Education;