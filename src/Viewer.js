import React from 'react';
import './Viewer.css';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { username: props.channel };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const twitchUrl = `https://player.twitch.tv/?channel=${this.state.username}`;
    return (
      <iframe
        className="Viewer"
        src={twitchUrl}
        style={{height: this.props.height, width: this.props.width}}
        // height={`${this.props.height}vh`}
        // width={`${this.props.width}vw`}
        frameBorder="<frameborder>"
        scrolling="<scrolling>"
        muted={false}
        allowFullScreen="<allowfullscreen>"
      />
    );
  }
}

Viewer.defaultProps = {
  targetID: 'twitch-embed',
  width: '940',
  height: '480',
  channel: '',
};

export default Viewer;
