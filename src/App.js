import React, {Component} from 'react';
import './App.scss';
import {Search} from "./Search/Search";
import Image from "./Image/Image";
import History from "./History/History";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Search/>
                <Image/>
                <History/>
            </div>
        );
    }
}

export default App;
