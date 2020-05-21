/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./style.css";
import faker from 'faker';
import { Icon } from 'antd';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddToFavourite: faker.random.boolean(),
        };
    }

    componentDidMount() {
    }


    onClickAddToFavourite = () => {
        const { isAddToFavourite } = this.state;

        this.setState({
            isAddToFavourite: !isAddToFavourite
        })
    }


    render() {
        const { isAddToFavourite } = this.state;
        const uuid = faker.random.uuid();

        return (
            < div className="album" >
                <div className="card card-album">
                    <div className="card-image">
                        <figure className="image image-album">
                            <a href={window.location.origin + "/detail/" + uuid}>
                                <img src={faker.random.image()} alt="Placeholder image" />
                            </a>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <p className="title">
                                    <strong className="title-album">
                                        <a href={window.location.origin + "/detail/" + uuid}>{faker.name.title()}</a>
                                    </strong>
                                </p>
                                <p className="subtitle">{`${faker.random.number()} photos`}</p>
                            </div>
                        </div>
                        <hr className="divider" />
                        <div className="media bottom">
                            <div className="media-right">
                                {
                                    isAddToFavourite ? (
                                        <Icon className="star" type="star" theme="twoTone" twoToneColor="#FADB14" onClick={this.onClickAddToFavourite} />
                                    ) : (
                                            <Icon className="star" type="star" onClick={this.onClickAddToFavourite} />
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Album;