import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { Page, Card, Button } from 'react-onsenui'

class SpeechExample extends Component {
    constructor(props) {
        super(props)
        this.props.stopListening()
    }

    render() {
        const { finalTranscript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, recognition, listening } = this.props

        if (!browserSupportsSpeechRecognition) {
            return (
                <div style={{textAlign:'center'}}>
                    Browser does not support Speech Recognition
                </div>
            )
        } else {
            recognition.lang = 'th-TH'
            recognition.continuous = false
        }

        let controller = null
        if(!listening) controller = (<Button onClick={startListening}>Start Listening</Button>)
        else controller = (<Button onClick={stopListening}>Stop Listening</Button>)

        return (
            <Page>
                <Card style={{textAlign:'center'}}>
                    {controller}&nbsp;
                    <Button onClick={resetTranscript}>Reset</Button>
                </Card>
                <Card style={{textAlign:'center'}}>
                    <span>{finalTranscript || 'Please start listening using menu above.'}</span>
                </Card>
            </Page>
        )
    }
}

export default SpeechRecognition({autoStart: false})(SpeechExample)