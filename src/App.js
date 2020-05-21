import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css'
import ListAlbum from './view/ListAlbum/ListAlbum';
import ListDetailAlbum from './view/ListDetailAlbum/ListDetailAlbum';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/list-album" name="list-album" component={ListAlbum} />
                    <Route exact path="/detail/:id" name="detail" component={ListDetailAlbum} />
                    <Route path="/" name="list-album" component={ListAlbum} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;