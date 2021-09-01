import React, {Component} from 'react';
import Quote, {HURT2} from "../components/Quote";

class SexualHarassment extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    rape & sexual harassment/assault
                </h1></div>

                <Quote quote={"Did you know that every 73 seconds, an american is sexually assaulted."}
                       citation={"~R.A.I.N.N"} path={HURT2}/>

                <p>
                    It is important to know that experiencing rape and/or sexual harassment/assault is not the fault of
                    the survivor. There are many emotions and steps that accompany rape or sexual assault. Due to the
                    often aggressive nature of the experience and the potential for sexually transmitted infections
                    (STIs) or pregnancy, it is important for a survivor to follow up with the emergency department
                    at their local hospital with 72 hours. To help the survivor navigate their options, such as evidence
                    collection and more, a social worker will often be involved at the hospital. To provide the best
                    evidence collection, the survivor should avoid showering or changing clothes prior to being cleaned.
                    You do not have to do any part of the exam you do not want. Additionally, the doctor can discuss
                    medications that are available to reduce the chances of contracting an STI or getting pregnant. If
                    the survivor is under the age of 18, the law requires the police to be notified. However, going to
                    the hospital and submitting a report do not necessarily mean that charges must be filed against the
                    perpetrator or that participation in a legal case are required. Counselors at the hospital or at
                    the above agencies can talk about available alternatives and help the survivor decide what the best
                    choice is for them.
                </p>
            </div>
        );
    }
}

export default SexualHarassment;