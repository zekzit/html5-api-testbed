import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Page, Button, Card } from 'react-onsenui'

class BarcodeReader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
      hasResult: false
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
        hasResult: true
      })
    }
  }

  handleError(err) {
    console.error(err)
  }

  rescan() {
    this.setState({ ...this.state, hasResult: false, result: 'No result' })
  }

  render() {
    let qrcodeUi = null
    let resultUi = (
      <Card style={{ textAlign: 'center' }}>
        <p style={{ marginTop: 0 }}>{this.state.result}</p>
        <Button onClick={this.rescan.bind(this)}>Rescan</Button>
      </Card>
    )
    if (!this.state.hasResult) {
      qrcodeUi = (
        <Card>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
        </Card>
      )
    }
    return (
      <Page>
        {qrcodeUi}
        {resultUi}
      </Page>
    )
  }
}

export default BarcodeReader