/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./style.css";
import { Icon, message, Upload } from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


class NewPhotosAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActiveModal: false,
            loading: false,
        };
    }

    onClickModal = () => {
        const { isActiveModal } = this.state;

        if (!isActiveModal) {
            this.setState({
                imageUrl: ""
            })
        }

        this.setState({
            isActiveModal: !isActiveModal
        })
    }

    handleChange = info => {
        const { addMorePhoto } = this.props;

        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );

            message.success('Upload photo successfully!');

            addMorePhoto()
        }
    };

    render() {
        const { isActiveModal } = this.state;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;

        return (
            < div className="new-photo" >
                <div className="card card-new-photo" onClick={this.onClickModal}>
                    <div className="card-image">
                        <figure className="image image-photo">
                            <div className="image-create">
                                <Icon type="plus-circle" className="ic-plus" />
                            </div>
                        </figure>
                    </div>
                    <div className="card-content">
                        <h5 className="title title-new-photo">
                            Add Photos
                        </h5>
                    </div>
                </div>

                <div className={`modal ${isActiveModal ? "is-active" : ""}`} >
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Add New Photos</p>
                            <button
                                className="delete"
                                aria-label="close"
                                onClick={this.onClickModal}
                            >
                            </button>
                        </header>
                        <section className="modal-card-body">
                            <div className="form-title"><strong>Cover Image:</strong></div>

                            <div className="img-upload is-centered">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                    multiple
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </div>

                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={this.onClickModal}>Done</button>
                        </footer>
                    </div>
                </div>
            </div >
        );
    }
}

export default NewPhotosAlbum;