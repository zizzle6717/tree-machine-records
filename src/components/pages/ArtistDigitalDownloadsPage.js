'use strict';

import React from 'react';
import {Link} from 'react-router';
import Animation from 'react-addons-css-transition-group';
import DownloadTile from '../pieces/DownloadTile';
import ArtistActions from '../../actions/ArtistActions';
import ArtistStore from '../../stores/ArtistStore';

export default class ArtistDigitalDownloadsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

		this.state = {
            artist: {
				'downloads': [{}]
			}
        }

        this.onChange = this.onChange.bind(this);
    }

	componentWillMount() {
        ArtistStore.addChangeListener(this.onChange);

    }

    componentDidMount() {
        document.title = "Tree Machine Records | Artist Digital Downloads";
		ArtistActions.get(this.props.params.artistParam).catch(() => {
			browserHistory.push('/photography');
		});
    }

	componentWillUnmount() {
		ArtistStore.removeChangeListener(this.onChange);
	}

	onChange() {
		let artist = ArtistStore.getArtist(this.props.params.artistParam);
		let downloads = [];
		artist.Files.forEach((file) => {
			if (file.type === 'download') {
				downloads.push(file);
			}
		});
		artist.downloads = downloads;
	    this.setState({
	      'artist': artist
	    });
	}

    render() {
        return (
			<div className="content-wrapper">
				<div className="row">
					<h2 className=""><Link key={this.props.params.artistParam} to={`/artists/${this.props.params.artistParam}`} className="no-underline">{this.state.artist.name}</Link></h2>
					<div className="photo-select">
						<Animation transitionName="fade" className="animation-wrapper" transitionEnter={true} transitionEnterTimeout={250} transitionLeave={true} transitionLeaveTimeout={250}>
							{
								this.state.artist.downloads.map((download, i) =>
									<DownloadTile key={i} imageUrl={`/images/artists/${this.props.params.artistParam}/photos/${download.image}`} downloadUrl={`/images/artists/${this.props.params.artistParam}/digitalDownloads/${download.name}`}/>
								)
							}
						</Animation>
					</div>
					{
						this.state.artist.downloads.length < 1 &&
						<h2 className="text-center">There are currently no results for the selected artist.</h2>
					}
		        </div>
			</div>

        );
    }
}
