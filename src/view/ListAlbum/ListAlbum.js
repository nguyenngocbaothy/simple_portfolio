/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Album from "../../components/Album/Album";
import NewAlbum from "../../components/NewAlbum/NewAlbum";
import "./style.css";

class ListAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultAlbums: 7,
        };
    }

    addMoreAlbum = () => {
        this.setState({
            defaultAlbums: this.state.defaultAlbums + 1
        })
    }

    renderAlbum = () => {
        const { defaultAlbums } = this.state;
        let arr = [<NewAlbum addMoreAlbum={this.addMoreAlbum} />];

        for (let i = 0; i < defaultAlbums; i++) {
            arr.push(<Album />);
        }

        return arr;
    }

    render() {
        const albums = this.renderAlbum();

        return (
            <div className="list-album">
                <section className="section has-background-light">
                    <div className="container album-wrapper">
                        {
                            albums && albums.length > 0 ? (
                                albums.map((i, index) => {
                                    return (
                                        <div key={index}>{i}</div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAlbum;