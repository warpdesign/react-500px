import {h, Component} from 'preact';
import Loader from './loader';

export default class Viewer extends Component {
    render() {
        console.log(this.props);

        return (
            <div id="viewer" className="transition1">
                <Loader activePicture={this.props.activePicture && this.props.activePicture.id}/>
            </div>
        );
    }
}