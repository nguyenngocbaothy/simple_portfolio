/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./style.css";
import faker from 'faker';
import { Icon } from 'antd';

class DetailAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLikePhoto: faker.random.boolean(),
            isActiveModal: false,
            img: faker.random.image(),
        };
    }

    componentDidMount() {
    }


    onClickLikePhoto = () => {
        const { isLikePhoto } = this.state;

        this.setState({
            isLikePhoto: !isLikePhoto
        })
    }

    onClickActiveModal = () => {
        this.setState({
            isActiveModal: !this.state.isActiveModal
        })
    }

    render() {
        const { isLikePhoto, isActiveModal, img } = this.state;

        return (
            < div className="photo" >
                <div className="card card-photo">
                    <div className="card-image">
                        <figure className="image image-photo" onClick={this.onClickActiveModal}>
                            <img src={img} alt="Placeholder image" />
                        </figure>


                        <div className="photo-info">
                            {
                                isLikePhoto ? (
                                    <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" onClick={this.onClickLikePhoto} />
                                ) : (
                                        <Icon type="heart" onClick={this.onClickLikePhoto} style={{ color: "white" }} />
                                    )
                            }
                            <span className="like-info">{faker.random.number()}</span>
                        </div>
                    </div>
                </div>

                <div className={`modal ${isActiveModal ? "is-active" : ""}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <p className="image is-4by3">
                            <img src={img} alt="" />
                        </p>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={this.onClickActiveModal}
                    ></button>
                </div>
            </div >
        );
    }
}

export default DetailAlbum;