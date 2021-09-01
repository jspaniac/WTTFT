import React, {Component} from 'react';
import Quote, {TEXT} from "../components/Quote";

class SexualHealth extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    sexual health
                </h1></div>

                <Quote quote={"Compared to older adults, sexually active adolescents and young adults are at a higher " +
                "risk for acquiring STDs. Recent estimates suggest that 15-24 year olds acquire nearly half of all new " +
                "STDs."} citation={"~ CENTER FOR DISEASE CONTROL"} path={TEXT}/>

                <p>
                    Many teens are unaware of the dangers associated with sexually transmitted infections (STIs) and
                    how to prevent or identify them. Talking with your partner about STIs and getting tested regularly
                    are important parts of being sexually active. Myths exist regarding all STIs, but it’s important to
                    learn about the facts before potentially putting yourself at risk.
                </p>

                <p>
                    There are three primary ways of contracting HIV:
                </p>

                <dl className="indented">
                    <dt>Unprotected sex with an infected individual</dt>
                    <dt>Sharing needles</dt>
                    <dt>From mother to unborn child</dt>
                </dl>
            </div>
        );
    }
}

export default SexualHealth;