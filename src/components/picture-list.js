import {h, Component} from 'preact';

import PictureItem from './picture-item';
// import data from 'data/mock';

export default class PictureList extends Component {
    renderItems() {
        return this.props.pictures.map((picture, index) => <PictureItem key={index} {...picture} setActivePicture={this.props.setActivePicture} />);
    }
    
    render() {
        console.log(this.props.pictures[0]);
        
        return (
            <div id="controls" className="visible">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}