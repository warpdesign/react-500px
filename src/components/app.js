import {h, Component} from 'preact';
import data from 'data/mock';
import PictureList from './picture-list';
import Viewer from './viewer';
import Player from 'services/player';

// use our css
import styles from 'css/500photos.css';
import stylesAnimations from 'css/transitions.css';

const API_LIST = '/proxy/500photos.php',
      mp3Sound = 'http://ia600500.us.archive.org/10/items/mia049/mia49a_aphilas_-_lifelong_fiction.mp3';

export default class App extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            pictures: [],
            activePicture: null
        };         
    }
    
    componentDidMount() {
        fetch(API_LIST).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw 'Error getting photo list';
            }
        })
        .then(json => {
            json.photos[0].isActive = true;

            this.setState({
                pictures: json.photos,
                activePicture: json.photos[0]
            });
        });

        Player.setUrl(mp3Sound);
        Player.play();
    }
    
    setActivePicture(picId) {
        // get picture to activate
        const previousPic = this.state.pictures.find(picture => picture.isActive === true);
        if (previousPic) {
            previousPic.isActive = false;
        }
        
        const newPic = this.state.pictures.find(picture => picture.id === picId);
        newPic.isActive = true;
        
        // set new app state
        this.setState({pictures: this.state.pictures, activePicture: newPic});
    }
    
    render() {
        return (
            <div>
                <Viewer class="transition1" activePicture={this.state.activePicture} />
                <PictureList 
                    pictures={this.state.pictures}
                    setActivePicture={this.setActivePicture.bind(this)}
                />
            </div>
        );
    }
}