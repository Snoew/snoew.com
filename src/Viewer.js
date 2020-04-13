import React from 'react';
import './Viewer.css'

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { username: props.channel };
        // this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     let embed;
    //     const script = document.createElement('script');
    //     script.setAttribute(
    //         'src',
    //         EMBED_URL
    //     );
    //     script.addEventListener('load', () => {
    //         embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    //     });
    //     document.body.appendChild(script);
    // }

    render() {
        let twitchUrl = "https://player.twitch.tv/?channel=" + this.state.username;
        return (
            <iframe
                className="Viewer"
                src={twitchUrl}
                height={this.props.height}
                width={this.props.width}
                frameborder="<frameborder>"
                scrolling="<scrolling>"
                muted="false"
                allowfullscreen="<allowfullscreen>">
            </iframe>
        )
    }
}

Viewer.defaultProps = {
    targetID: 'twitch-embed',
    width: '940',
    height: '480',
    channel: "randomwelshman"
}

export default Viewer