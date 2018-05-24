import {h, Component} from 'preact';

import ClassNames from 'classnames';

export default class PictureItem extends Component {
    constructor(props)  {
        super(props);
        
        this.state = {
            isActive: false
        }
    }
    
    render() {
        let pictClassNames = ClassNames({
            active: this.props.isActive
        }),
        { image_url, name, id } = this.props;

        return (
            <li onClick={this.props.setActivePicture.bind(this, id)} className={pictClassNames}>
                <img src={image_url} alt={name} />
            </li>
        );
    }
}