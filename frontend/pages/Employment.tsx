import React, {Component} from 'react';
import Quote, {THUMBS} from "../components/Quote";

class Employment extends Component<{}, {}> {
    render() {
        return (
            <div className="orange">
                <div className="sticky"><h1>
                    employment & job training
                </h1></div>

                <Quote quote={"Did you know that people under the age of 18 can work under the following conditions " +
                "while at school: 14-15 years old up to 3 hours on a school day. 16-17 years old up to 4 hours on a " +
                "school day."} citation={""} path={THUMBS}/>

                <dl className="indented">
                    <dt>If you are 14-15 years old, you can work up to 3 hours on a school day.</dt>
                    <dt>If you are 16-17 years old, you can work up to 4 hours on a school day.</dt>
                    <dt>If you are 18+ years old, you may perform any job with no restrictions.</dt>
                </dl>

                <p>
                    When applying for a job, it is important to have the following available:
                </p>
                <dl className="indented">
                    <dt>Form of identification including: a driver’s license, state-issued ID, birth certificate,
                        or passport</dt>
                    <dt>Social Security number</dt>
                    <dt>Current address and phone number</dt>
                    <dt>Name/contact information for adults you can list as references</dt>
                </dl>
            </div>
        );
    }
}

export default Employment;