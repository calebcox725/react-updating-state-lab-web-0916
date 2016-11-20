const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.setBitrate = this.setBitrate.bind(this)
    this.setVideoResolution = this.setVideoResolution.bind(this)
  }

  setBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  setVideoResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate} />
        <button className="resolution" onClick={this.setVideoResolution} />
      </div>
    )
  }
}

module.exports = YouTubeDebugger
