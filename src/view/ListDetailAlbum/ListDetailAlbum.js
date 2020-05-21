/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import DetailAlbum from "../../components/DetailAlbum/DetailAlbum";
import NewPhotosAlbum from "../../components/NewPhotosAlbum/NewPhotosAlbum";
import "./style.css";
import faker from 'faker';
import moment from "moment";
import { Icon } from 'antd';


class ListDetailAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultAlbums: 8,
            isAddToFavourite: faker.random.boolean(),
        };
    }

    renderAlbum = () => {
        const { defaultAlbums } = this.state;
        let arr = [<NewPhotosAlbum addMorePhoto={this.addMorePhoto} />];

        for (let i = 0; i < defaultAlbums; i++) {
            arr.push(<DetailAlbum />);
        }

        return arr;
    }

    onClickAddToFavourite = () => {
        const { isAddToFavourite } = this.state;

        this.setState({
            isAddToFavourite: !isAddToFavourite
        })
    }

    addMorePhoto = () => {
        this.setState({
            defaultAlbums: this.state.defaultAlbums + 1
        })
    }

    render() {
        const albums = this.renderAlbum();
        const { isAddToFavourite } = this.state;


        return (
            <div className="list-album">
                <section className="section has-background-light">
                    <div className="container card-info">
                        <div className="card card-detail-info">
                            <div className="tile is-ancestor">
                                <div className="tile is-vertical is-12">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <article className="tile is-child media-row">
                                                <div className="media-right-left">
                                                    <p className="title">{faker.name.title()}</p>
                                                    <p className="subtitle">{moment(faker.date.past()).format("DD/MM/YYYY hh:mm").toLocaleString()}</p>
                                                    <p>{faker.lorem.paragraph()}</p>
                                                </div>

                                                <div className="media-right-info">
                                                    <div style={{ textAlign: "center" }}>
                                                        <div>
                                                            {
                                                                isAddToFavourite ? (
                                                                    <Icon className="star" type="star" theme="twoTone" twoToneColor="#FADB14" onClick={this.onClickAddToFavourite} style={{ fontSize: 30 }} />
                                                                ) : (
                                                                        <Icon className="star" type="star" onClick={this.onClickAddToFavourite} style={{ fontSize: 30 }} />
                                                                    )
                                                            }
                                                        </div>
                                                        <div className="name">
                                                            {faker.name.findName()}
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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

export default ListDetailAlbum;