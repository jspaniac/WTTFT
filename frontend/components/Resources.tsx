import React, {Component} from 'react';

interface ResourcesProps {
    resources: any;
}

interface ResourcesState {
    county: string;
}

const KING: string = "k";
const PIERCE: string = "p";
const SNO: string = "s";
const WASH: string = "w";

class Resources extends Component<ResourcesProps, ResourcesState> {
    constructor(props: any) {
        super(props);
        this.state = {
            county: WASH,
        }
    }

    setCounty = (newCounty: string) => {
        this.setState({
            county: newCounty,
        })
    }

    render() {
        let html: any[] = [];
        html.push(<div key={"button-div"} className="title">
                    <h1 className="resource-title">Resources</h1>
                    <div className="tabs">
                        <input type="button" value="Washington" className={this.state.county === WASH ? "selected" : ""}
                               onClick={() => this.setCounty(WASH)}/>
                        <input type="button" value="King" className={this.state.county === KING ? "selected" : ""}
                               onClick={() => this.setCounty(KING)}/>
                        <input type="button" value="Pierce" className={this.state.county === PIERCE ? "selected" : ""}
                               onClick={() => this.setCounty(PIERCE)}/>
                        <input type="button" value="Snohomish" className={this.state.county === SNO ? "selected" : ""}
                               onClick={() => this.setCounty(SNO)}/>
                    </div>
            </div>
        );

        if (this.props.resources !== null) {
            let r: any[] = this.props.resources[this.state.county];

            let resource: any[] = [];

            html.push(<div key="resource-header" className="resource resource-header">
                <div className="link center">
                    <span role="img" aria-label="computer">💻</span> Website <span role="img" aria-label="computer">💻</span>
                </div>
                <div className="tel center">
                    <span role="img" aria-label="phone">☎️</span> Phone <span role="img" aria-label="phone">☎️</span>
                </div>
            </div>);
            if (r !== undefined) {
                for (let i = 0; i < r.length; i++) {
                    let name: string = r[i].name;
                    let phone: string = r[i].phone;
                    let website: string = r[i].website;
                    resource.push(<div className={i % 2 === 0 ? "resource even" : "resource odd"} key={i}>
                        <div className="link center">
                            <a href={website} rel="noopener noreferrer" target="_blank" key={name}>{name}</a>
                        </div>
                        <div className="tel center">
                            <a href={"tel:" + phone.replaceAll('.', '-')} key={phone}>{phone}</a>
                        </div>
                    </div>);
                }
            }

            html.push(<div id="resources" key={"resources-div"}>{resource}</div>);
        }
        return html;
    }
}

export default Resources;
