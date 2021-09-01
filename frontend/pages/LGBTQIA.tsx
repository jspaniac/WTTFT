import React, {Component} from 'react';
import Quote, {SAD} from "../components/Quote";

class LGBTQIA extends Component<{}, {}> {
    render() {
        return (
            <div className="orange">
                <div className="sticky"><h1>
                    LGBTQIA+
                </h1></div>

                <Quote quote={"LGBTQIA+ youth who have reported having at least one accepting adult in their life were " +
                "40% less likely to have reported a recent suicide attempt."} citation={"~ The Trevor Project"} path={SAD}/>

                <p>
                    Questioning one’s gender and sexual identity is a normal part of adolescence and growing up.
                    Finding supportive people and groups can be difficult, and Lesbian, Gay, Bisexual, Transgender,
                    Queer or Questioning, Intersex, and Asexual (LGBTQIA+) people are frequent targets of
                    discrimination, violence, and bullying/ harassment. The resources below are available to provide a
                    safe environment of understanding and information as well as promote gender and sexual acceptance.
                </p>
            </div>
        );
    }
}

export default LGBTQIA;