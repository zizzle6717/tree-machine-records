'use strict';

import React from 'react';
import {Link} from 'react-router';
import Animation from 'react-addons-css-transition-group';
import ImageTile from '../pieces/ImageTile';
import ArtistActions from '../../actions/ArtistActions';
import ArtistStore from '../../stores/ArtistStore';

export default class PhotographyListPage extends React.Component {
	constructor(props, context) {
        super(props, context);

        this.state = {
            photos: []
        }
        this.onChange = this.onChange.bind(this);
    }

	componentWillMount() {
        ArtistStore.addChangeListener(this.onChange);
    }

    componentDidMount() {
        document.title = "Tree Machine Records | Photography By Artist";
        ArtistActions.getAll();
    }

	componentWillUnmount() {
		ArtistStore.removeChangeListener(this.onChange);
	}

	onChange() {
		let artists = ArtistStore.getArtists();
		let photos = [];
		artists.forEach((artist, i) => {
			artist.Files.forEach((file) => {
				if (file.identifier === 'photosCoverImage') {
					let data = {
						'artistParam': artist.param,
						'fileName': file.name,
					}
					photos.push(data);
				}
			})
		});
	    this.setState({
	      'photos': photos
	    });
	}

    render() {
        return (
			<div className="content-wrapper">
				<div className="row">
					<div className="photo-select">
						{
							this.state.photos.map((photo, i) =>
								<ImageTile key={i} id={1} imageUrl={`/images/artists/${photo.artistParam}/photos/${photo.fileName}`} internalLinkUrl={`/artists/${photo.artistParam}/photography`}/>
							)
						}
					</div>
		        </div>
			</div>
        );
    }
}
