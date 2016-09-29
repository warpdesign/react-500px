import React from 'react';
import classNames from 'classnames';

const Status = {
    PENDING: 0,
    LOADING: 1,
    READY: 2
};

const API_PHOTO = '/proxy/500photos.php?id=';


export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.src ? Status.LOADING : Status.PENDING
        }
    }

    renderImg() {
        let imgClass = classNames({
            fullImage: true,
            shown: this.state.status === Status.READY
        });

        if (this.state.status === Status.READY) {
            return (
                <div className={imgClass}><div id="loader" style={{display:'none'}}>↻</div><img src={this.img && this.img.src} /></div>
            );
        } else {
            return (
                <div className={imgClass}><div id="loader">↻</div><img src={this.img && this.img.src} /></div>
            );
        }
    }

    onload() {
        this.setState({
            status: Status.READY
        });
    }

    loadImage(json) {
        console.log('loading image', json);
        this.img = new Image();
        this.img.src = json.photo.image_url;
        this.img.onload = ::this.onload;
    }

    getPictureUrl() {
        fetch(API_PHOTO + this.props.activePicture).then(response => {
            if (response.status === 200) {
                response.json().then(::this.loadImage);
            }
        });
    }

    componentDidMount() {
        if (this.props.activePicture) {
            this.getPictureUrl();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activePicture && this.props.activePicture !== nextProps.activePicture) {
            this.setState({
                status: Status.LOADING 
            });
        }
    }

    componentDidUpdate() {
        if (this.state.status === Status.LOADING) {
            this.getPictureUrl();
        }
    }

    render() {
        console.log(this.props);

        let args = [];
        
        return this.renderImg()
    }
}