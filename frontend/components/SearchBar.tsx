import React, {Component} from 'react';

interface SearchBarProps {
    updateSearch(term: string): void;
}

interface SearchBarState {
    term: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
    constructor (props: any) {
        super(props);
        this.state = {
            term: "",
        }
    }

    updateTerm = (event: any) => {
        this.setState({
            term: event.target.value,
        })
    }

    keyPressed = (event: any) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            this.props.updateSearch(this.state.term);
        }
    }

    render() {
        return(
            <input key="search" id="searchbar" placeholder="Search..." onChange={this.updateTerm}
                   value={this.state.term} onKeyPress={this.keyPressed}/>
        );
    }
}

export default SearchBar;
