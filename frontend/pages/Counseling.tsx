import React, {Component} from 'react';
import Quote, {LOL} from "../components/Quote";

class Counseling extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    counseling & mental health
                </h1></div>


                <Quote quote={"Did you know that in Washington State, youth may access confidential counseling at age 13 " +
                "without parent/guardian consent? The following agencies provide mental and behavioral health services for " +
                "youth."} citation={""} path={LOL}/>

                <h4>Wraparound with Intensive Services (WISe)</h4>
                <p>
                    Wraparound is a team planning process for youth with complex needs and their families. It is
                    designed to help youth stay in their homes and communities. In receiving this extra support,
                    many are able to successfully managing complex situations. You may be a good fit if you are
                    under 21 years old and are enrolled in two or more of the following services: mental health,
                    substance use, special education, Children’s Administration, Juvenile Justice, or Developmental
                    Disabilities Administration.
                </p>
                <p>
                    A team of relevant individuals (family, service providers, school staff, community members, and
                    natural supports) is created to support the youth from all sides Visit <a href="https://www.kingcounty.gov/wraparoundwise" rel="noopener noreferrer" target="_blank">www.kingcounty.gov/wraparoundwise</a> to
                    learn more about program eligibility. To request a referral, you can call the King County
                    Behavioral Health and Recovery Division at <a href="tel:206-263-9000">206.263.9000</a> or the agency serving your school
                    district:
                </p>
            </div>
        );
    }
}

export default Counseling;