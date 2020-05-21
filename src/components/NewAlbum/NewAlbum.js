/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./style.css";
import { Icon, message } from 'antd';

class NewAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActiveModal: false,
            file: null,
            title: "",
        };
    }

    onClickModal = () => {
        const { isActiveModal } = this.state;

        if (!isActiveModal) {
            this.setState({
                file: null,
                title: "",
            })
        }

        this.setState({
            isActiveModal: !isActiveModal
        })
    }

    onChangeTitle = (e) => {
        const value = e.target.value;

        if (value) {
            this.setState({
                title: value,
            })
        }
    }

    onChangeFile = (e) => {
        this.setState({ file: e.target.files[0] });
    }

    onClickCreateImage = (e) => {
        e.preventDefault();
        const { title, file } = this.state;
        const { addMoreAlbum } = this.props;

        const formData = new FormData();
        formData.append('myImage', file);

        message.success(
            <div>
                <span>Create success new album:</span>{' '}
                <span><strong>"{title}"</strong></span>{' '}
                <span>and cover image</span>{' '}
                <span><strong>"{file.name}"</strong></span>
            </div>
        );

        this.onClickModal();
        addMoreAlbum();
    }

    render() {
        const { isActiveModal, file, title } = this.state;

        return (
            < div className="new-album" >
                <div className="card card-new-album" onClick={this.onClickModal}>
                    <div className="card-image">
                        <figure className="image image-album">
                            <div className="image-create">
                                <Icon type="plus-circle" className="ic-plus" />
                            </div>
                        </figure>
                    </div>
                    <div className="card-content">
                        <h5 className="title title-new-album">
                            Create New Album
                        </h5>
                    </div>
                </div>

                <div className={`modal ${isActiveModal ? "is-active" : ""}`} >
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Create New Album</p>
                            <button
                                className="delete"
                                aria-label="close"
                                onClick={this.onClickModal}
                            >
                            </button>
                        </header>
                        <section className="modal-card-body">
                            <div className="form-title"><strong>Title:</strong></div>
                            <div className="control">
                                <input
                                    className="input is-focused"
                                    type="text"
                                    placeholder="Input title album"
                                    value={title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-title"><strong>Cover Image:</strong></div>
                            <div className="file has-name is-boxed is-centered">
                                <label className="file-label">
                                    <input
                                        className="file-input"
                                        type="file"
                                        name="resume"
                                        accept="image/png, image/jpeg"
                                        onChange={this.onChangeFile}
                                    />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        {
                                            file ? file.name : "Please select an cover image album"
                                        }
                                    </span>
                                </label>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button
                                className="button is-success"
                                onClick={this.onClickCreateImage}
                            >
                                Create
                            </button>
                            <button className="button" onClick={this.onClickModal}>Cancel</button>
                        </footer>
                    </div>
                </div>
            </div >
        );
    }
}

export default NewAlbum;