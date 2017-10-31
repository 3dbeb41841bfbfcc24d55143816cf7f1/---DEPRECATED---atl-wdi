import React, {Component} from 'react';
import axios from 'axios';

class Artist extends Component {
    constructor() {
        super();
        this.state = {
            artist: {},
            songs: [],
        };
    }

    componentWillMount() {
        const artistId = this.props.match.params.id;
        this.fetchArtistAndSongData(artistId)
    }

    fetchArtistAndSongData = async (artistId) => {
        try {
            const artistResponse = await axios.get(`/api/artists/${artistId}`)
            const songsResponse = await axios.get(`/api/artists/${artistId}/songs`)
            await this.setState({
                artist: artistResponse.data,
                songs: songsResponse.data
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.artist.photo_url} alt=""/>
                <h1>{this.state.artist.name}</h1>
                {this.state.songs.map(song => (
                    <div key={song.id}>
                        <h4>{song.title}</h4>
                        <audio controls src={song.preview_url}></audio>
                    </div>
                ))}
            </div>
        );
    }
}

export default Artist;