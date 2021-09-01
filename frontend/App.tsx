//General pre-made component imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {isMobile} from 'react-device-detect'

//Component imports
import Chapters from "./components/Chapters";

//Page imports
import About from "./pages/About";
import Substance from "./pages/Substance";
import Abuse from "./pages/Abuse";
import Counseling from "./pages/Counseling";
import Agencies from "./pages/Agencies";
import Domestic from "./pages/Domestic";
import Eating from "./pages/Eating";
import Education from "./pages/Education";
import Employment from "./pages/Employment";
import Loss from "./pages/Loss";
import Health from "./pages/Health";
import Shelter from "./pages/Shelter";
import Legal from "./pages/Legal";
import LGBTQIA from "./pages/LGBTQIA";
import Disabilities from "./pages/Disabilities";
import SexualHarassment from "./pages/SexualHarassment";
import Recreation from "./pages/Recreation";
import SexualHealth from "./pages/SexualHealth";
import Suicide from "./pages/Suicide";
import Bullying from "./pages/Bullying";

import "./App.css";
import TitleBar from "./components/TitleBar";
import Resources from "./components/Resources";

interface AppState {
    chapter: number;                                //The current chapter selected

    displayedChapters: number[];                    //The chapters to be displayed in the sidebar
    resources: any;                                 //The resources loaded for the chapter

    indexLarge: boolean;                            //The current size of the index popup

    crisisLogo: HTMLImageElement | null;            //The main logo image

    width: number;
}

const INPUT_STRING: string = "https://wttft-backend.herokuapp.com/";      //Used for querying the server

export const routes = [                              //Used in initializing the routing
    {
        name: "about teen link",
        path: "/",
        component: <About/>,
        image: "./icons/about.png"
    }, {
        name: "alcohol, drugs, & substance use",
        path: "/substance_use",
        component: <Substance/>,
        image: "./icons/alcohol.png"
    }, {
        name: "counseling & mental health",
        path: "/counseling",
        component: <Counseling/>,
        image: "./icons/counseling.png"
    }, {
        name: "eating disorders",
        path: "/eating_disorders",
        component: <Eating/>,
        image: "./icons/eating.png"
    }, {
        name: "grief & loss",
        path: "/grief_loss",
        component: <Loss/>,
        image: "./icons/loss.png"
    }, {
        name: "physical health concerns",
        path: "/health",
        component: <Health/>,
        image: "./icons/health.png"
    }, {
        name: "sexual health",
        path: "/sexual_health",
        component: <SexualHealth/>,
        image: "./icons/sexual.png"
    }, {
        name: "suicide & self-harm",
        path: "/suicide",
        component: <Suicide/>,
        image: "./icons/suicide.png"
    }, {
        name: "abuse & maltreatment of minors",
        path: "/child_abuse",
        component: <Abuse/>,
        image: "./icons/abuse.png"
    }, {
        name: "bullying & cyberbullying",
        path: "/bullying",
        component: <Bullying/>,
        image: "./icons/bullying.png"
    }, {
        name: "dating & domestic violence",
        path: "/dating",
        component: <Domestic/>,
        image: "./icons/dating.png"
    }, {
        name: "rape & sexual harassment/assault",
        path: "/rape",
        component: <SexualHarassment/>,
        image: "./icons/sexual_assault.png"
    }, {
        name: "legal services & community support",
        path: "/legal_services",
        component: <Legal/>,
        image: "./icons/legal.png"
    }, {
        name: "shelter, food, & hygiene",
        path: "/shelter_food_hygiene",
        component: <Shelter/>,
        image: "./icons/homelessness.png"
    }, {
        name: "culturally inclusive agencies",
        path: "/culture",
        component: <Agencies/>,
        image: "./icons/inclusion.png"
    }, {
        name: "education",
        path: "/education",
        component: <Education/>,
        image: "./icons/education.png"
    }, {
        name: "employment & job training",
        path: "/employment",
        component: <Employment/>,
        image: "./icons/employment.png"
    }, {
        name: "LGBTQIA+",
        path: "/LGBTQIA+",
        component: <LGBTQIA/>,
        image: "./icons/lgbtq.png",
    }, {
        name: "people with disabilities",
        path: "/disabilities",
        component: <Disabilities/>,
        image: "./icons/disabilities.png"
    }, {
        name: "volunteer opportunities & recreation",
        path: "/volunteering",
        component: <Recreation/>,
        image: "./icons/volunteering.png"
    },
];

class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            chapter: 1,

            displayedChapters: [],
            resources: null,

            indexLarge: false,

            crisisLogo: null,

            width: window.innerWidth,
        };

        this.sendSearchRequest("");
        this.sendResourceRequest(this.state.chapter);
    }

    /**
     * Adds a listener for when the window resizes
     */
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    /**
     * Removes the listener for when the window resizes
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    /**
     * Updates the state component for window width when the window changes
     */
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    /**
     * Sends a search request to the server and updates the chapters displayed in the
     * sidebar appropriately
     *
     * @param term the term searched by the user
     */
    sendSearchRequest = async(term: string) => {
        try {
            let response = await fetch(INPUT_STRING + "search?term=" + term);
            if (!response.ok) {
                alert("Error: Internal server error");
                return;
            }
            let parsed = await response.json();

            let displayed: number[] = [];
            for (let i = 0; i < parsed.length; i++) {
                for (let j = 0; j < routes.length; j++) {
                    if (parsed[i] === routes[j].name) {
                        displayed.push(j);
                        break;
                    }
                }
            }

            this.setState({displayedChapters: displayed});
        } catch (e) {
            alert("Error: Server isn't operating")
        }
    }

    /**
     * Sends a resource request to the server so they can be accessed in the
     * index pop up
     *
     * @param chapter the chapter whose resources we want
     */
    sendResourceRequest = async(chapter: number) => {
        try {
            let response = await fetch(INPUT_STRING + "resources?chapter=" + chapter);
            if (!response.ok) {
                alert("Error: Internal server error");
                return;
            }
            let parsed = await response.json();
            this.setState({
                resources: parsed,
            })
        } catch (e) {
            alert("Error: Server isn't operating")
        }
    }

    /**
     * Updates the selected chapter to display to 'newChapter'
     *
     * @param newChapter a number representation of the chapter to display
     */
    updateChapter = (newChapter: number): void => {
        if (this.state.chapter !== newChapter) {
            this.setState({
                chapter: newChapter,
                resources: null,
            });

            this.sendResourceRequest(newChapter);
        }
    }

    render() {
        //Creates the Route components from the routes map
        const routeComponents = routes.map(({path, component}, key) =>
            <Route exact path={path} render={() => {
                this.updateChapter(key + 1);
                return component
            }} key={key}/>);
        const smallView: boolean = isMobile || this.state.width < 800

        let html: any[] = [];

        // Title bar
        html.push(<div key="title" id="title-bar">
            <TitleBar updateChapter={this.updateChapter} updateSearch={this.sendSearchRequest}
                      currChapter={this.state.chapter} displayChapters={this.state.displayedChapters}
                      resources={this.state.resources}/>
        </div>);

        html.push(<div key="sidebar" id="sidebar"><div>
                        <Chapters updateChapter={this.updateChapter} currChapter={this.state.chapter}
                                  displayChapters={this.state.displayedChapters} updateSearch={this.sendSearchRequest}
                        />
                  </div></div>);

        // Load the main selected chapter here
        html.push(<div key="content" className={smallView ? "main mobile" : "main computer"} id="content">
            <Switch>
                {routeComponents}
            </Switch>
            <div key="resources-section" id="resource-wrapper">
                <Resources resources={this.state.resources}/>
            </div>
        </div>);

        return <Router>{html}</Router>;
    }
}

export default App;