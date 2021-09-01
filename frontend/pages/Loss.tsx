import React, {Component} from 'react';
import Quote, {HURT} from "../components/Quote";

class Loss extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    grief & loss
                </h1></div>

                <Quote quote={"Did you know that 1 in 5 children will experience the death of someone close to them by " +
                "age 18."} citation={"~ JOURNAL OF DEATH AND DYING"} path={HURT}/>

                <p>
                    Dealing with the loss of a loved one is a difficult process. Often times, the loss can feel
                    overwhelming and seem too much to bear. It may result in emotions such as sadness, shock, or anger,
                    and in physical sensations such as breathlessness and lack of energy. While these are all common
                    reactions to grief and loss, seeking additional support and resources can help you manage some of
                    the feelings that you’re dealing with. These are some agencies and programs that have been developed
                    for individuals that are dealing with a loss.
                </p>
            </div>
        );
    }
}

export default Loss;