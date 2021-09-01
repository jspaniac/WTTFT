import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {routes} from "../App";

interface ChapterProps {
    updateChapter(newChapter: number): void;            //Updates the selected chapter
    updateSearch(term: string): void;                   //Updates displayed chapters based on search

    currChapter: number;                                //Current chapter being displayed
    displayChapters: number[];                          //The chapters to display based on the search
}

class Chapters extends Component<ChapterProps, {}> {
    render() {
        let html: any[] = [];

        for (let i = 0; i < this.props.displayChapters.length; i++) {
            let chapterIndex: number = this.props.displayChapters[i];
            let chapterDiv: any[] = [];
            let buttons: any[] = [];
            buttons.push(<div key={"frame-" + i} className="frame">
                                <input key={"image-" + i} type="image" alt={routes[chapterIndex].name}
                                       src={routes[chapterIndex].image}
                                       onClick={() => this.props.updateChapter(chapterIndex + 1)}/>
                         </div>);

            chapterDiv.push(<Link className="image-link" key={i + "-image"} to={routes[chapterIndex].path}>
                                {buttons}
                            </Link>);
            chapterDiv.push(<div className={i === this.props.displayChapters.length - 1 ? "last chapter-label" : "chapter-label"}>
                                <div className="label-absolute">
                                    {routes[chapterIndex].name}
                                </div>
                            </div>)
            html.push(<span className="chapter" key={"chapter-" + i}>
                            {chapterDiv}
                      </span>)
        }
        return html;
    }
}

export default Chapters;
