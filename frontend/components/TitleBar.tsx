import React, {Component} from 'react';
import SearchBar from "./SearchBar";

interface TitleBarProps {
    updateChapter(newChapter: number): void;
    updateSearch(term: string): void;
    currChapter: number;
    displayChapters: number[];

    resources: any[];
}

const CRISIS_LOGO: string = "./Crisis_logo.png";            //Location of the crisis logo

class TitleBar extends Component<TitleBarProps, {}> {

    render() {
        let html: any[] = [];
        html.push(<SearchBar key="searchbar" updateSearch={this.props.updateSearch}/>);

        html.push(<div key="logo-div main" className="logo-div">
                      <a href="https://www.crisisconnections.org/" rel="noopener noreferrer" target="_blank">
                        <img key="logo" src={CRISIS_LOGO} alt="Crisis Connections" height="40"/>
                      </a>
                  </div>)

        return html;
    }
}

export default TitleBar;
