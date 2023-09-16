import React from 'react';
import { useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const InterviewPage = () => {
    let questionJson = JSON.parse(sessionStorage.getItem('questionJson'));
    let questionCount = useRef()
    console.log(questionJson);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const startButton = (e) => {
        // document.getElementById('mic-image').src = "./assets/mic-slash.gif";
        if (listening) {
            SpeechRecognition.stopListening()
        } else {
            SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
        }
    }

    const handleNextClick = () => {

    }


    return (
        <div className='container-fluid'>
            <div className='container py-3 my-3 d-flex flex-column align-items-center justify-content-center'>
                <div className='mb-3'>
                    <p><b><i>Question:- </i></b><span>What is react?</span></p>
                </div>
                <div className='mb-3'>
                    <img id='mic-image' src={listening ? "./assets/mic-animate.gif" : "./assets/mic.gif"} alt='mic-logo' />
                </div>
                <div className='mb-3'>
                    <p id="final_span">{transcript}</p>
                </div>
                <div>
                    <button onClick={(e) => resetTranscript()} className='btn btn-warning'>
                        <span>Reset This Answer</span>
                    </button>
                    <button onClick={(e) => startButton(e)} className='btn btn-primary mx-3'>
                        <span>{listening ? "Stop" : "Start"} </span>Answering
                    </button>
                    <button className='btn btn-success ' onClick={handleNextClick()}>Next Question &gt;</button>
                </div>
            </div>
        </div>
    )
}

export default InterviewPage;