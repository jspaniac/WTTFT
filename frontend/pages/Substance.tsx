import React, {Component} from 'react';
import Quote, {HAPPY} from '../components/Quote';

class Substance extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    alcohol, drugs, & substance use
                </h1></div>

                <Quote quote={"Did you know that the percentage of teens reporting cigarette use is half of what it was " +
                "a decade ago. On the other hand, vaping rates have increased significantly and many people are uninformed " +
                "about the health risks?"} citation={"~ 2018 WA STATE HEALTHY YOUTH SURVEY"} path={HAPPY}/>

                <p>
                    For more information on drugs and alcohol and how they affect your brain and body, check out the
                    National Institute on Drug Abuse for Teens at <a href="https://www.teens.drugabuse.gov" rel="noopener noreferrer" target="_blank">www.teens.drugabuse.gov</a>. For information related
                    to marijuana use and prevention, visit <a href="https://www.youcanwa.org" rel="noopener noreferrer" target="_blank">www.youcanwa.org</a>.
                </p>

                <h4>
                    Signs that someone’s substance use may be a problem:
                </h4>

                <dl className="indented">
                    <dt>Using more than planned</dt>
                    <dt>Spending more time drinking or using</dt>
                    <dt>Blacking out or having trouble remembering things</dt>
                </dl>

                <p>
                    In association with the WA Recovery Help Line, Teen Link provides help to teens struggling with
                    alcohol, drugs, and gambling. Call <a href="tel:1-866-833-6564">1.866.833.6546</a> or chat by going to <a href="https://www.teenlink.org" rel="noopener noreferrer" target="_blank">www.teenlink.org</a> and
                    clicking on the Chat page between 2-10pm (M-F) to speak with our Substance Use Prevention
                    Clinician, or call the WA Recovery Help Line 24 hours a day at <a href="tel:1-866-789-1511">1.866.789.1511</a>.
                </p>
            </div>
        );
    }
}

export default Substance;