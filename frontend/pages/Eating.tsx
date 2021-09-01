import React, {Component} from 'react';
import Quote, {HURT2} from "../components/Quote";

class Eating extends Component<{}, {}> {
    render() {
        return (
            <div className="green">
                <div className="sticky"><h1>
                    eating disorders
                </h1></div>

                <Quote quote={"Did you know that in the United States, thirty million people suffer from a clinically " +
                "significant eating disorder at some point in their lives, including anorexia, bulimia, binge eating " +
                "disorder, or other associated dietary conditions."} citation={"~ NATIONAL EATING DISORDERS ASSOCIATION"} path={HURT2}/>

                <p>
                    Eating disorders are serious but treatable conditions that involve extreme emotions and behaviors
                    surrounding food and weight or shape. They can arise from psychological, emotional, social, and
                    familial situations, but they have no single reason or cause. Eating disorders can become life
                    threatening, so getting professional help is important. The following agencies provide support for
                    people who are dealing with an eating disorder.
                </p>
            </div>
        );
    }
}

export default Eating;