import React, { Component } from 'react';
import { List, Text, View } from 'react-native';

import Card from './Card';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
            .then(resp => resp.json())
            .then(albums => {
                this.setState({ albums });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => (
            <AlbumDetail key={album.title} album={album} />
        ));
    }

    render() {
        return <Card>{this.renderAlbums()}</Card>;
    }
}
