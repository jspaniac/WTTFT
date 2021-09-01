import React, {Component} from 'react';

interface QuoteProps {
    quote: string;
    citation: string;
    path: string;
}

export const HAPPY: string = "./images/happy.png";
export const HURT: string = "./images/hurt.png";
export const HURT2: string = "./images/hurt2.png";
export const LOL: string = "./images/lol.png";
export const MIND: string = "./images/mind_blown.png";
export const PARTY: string = "./images/party.png";
export const SAD: string = "./images/sad.png";
export const TEXT: string = "./images/texts.png";
export const THUMBS: string = "./images/thumbs_up.png";

class Quote extends Component<QuoteProps, {}> {
    render() {
        let html: any[] = [];
        html.push(<div key = {this.props.quote} className="quote">
                    <div className="gray">
                        <div className="text"><p>{this.props.quote}</p></div>
                        <p className="right">{this.props.citation}</p>
                    </div>
                    <img src={this.props.path} alt="Mascot"/>
                  </div>);
        return html;
    }
}

export default Quote;
