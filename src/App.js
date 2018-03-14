import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import BarcodeReader from './components/barcode-reader'
import SpeechExample from './components/speech-example'
import { Page, Toolbar, ToolbarButton, Icon } from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }
  renderToolbar() {
    return (
      <Toolbar modifier="material">
        <div className="left"></div>
        <div className="center">MM's PWA Testbed</div>
        <div className="right">
          <ToolbarButton>
            <Link to="/"><Icon icon='md-home'/></Link>
          </ToolbarButton>
          <ToolbarButton>
            <Link to="/barcode-reader"><Icon icon='fa-qrcode'/></Link>
          </ToolbarButton>
          <ToolbarButton>
            <Link to="/speech-example"><Icon icon='fa-microphone'/></Link>
          </ToolbarButton>
        </div>
      </Toolbar>
    )
  }

  render() {
    return (
      <Page className="App" renderToolbar={this.renderToolbar}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/barcode-reader" component={BarcodeReader} />
        <Route exact path="/speech-example" component={SpeechExample} />
      </Page>
    );
  }
}

export default App;
