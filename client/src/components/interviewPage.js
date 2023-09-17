import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Loader from './common/loader';
const API_URL = 'http://localhost:5000';
var updatedQuestionJson = [];

const InterviewPage = () => {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    let questionJson = JSON.parse(sessionStorage.getItem('questionJson'));

    let questionIndex = useRef(1);
    var filteredQuestion = questionJson.filter((eachQues) => eachQues.id === questionIndex.current);


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
        if (listening) {
            SpeechRecognition.stopListening();

        } else {
            SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
        }
    }

    const getAnalysis = async (payload) => {
        try {
            let response = await fetch(`${API_URL}/analyze`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }


    const handleNextClick = async () => {
        setLoading(true);
        if (listening) {
            SpeechRecognition.stopListening();
        }

        if (questionIndex.current === questionJson.length) {
            updatedQuestionJson.push({
                ...filteredQuestion[0],
                answer: transcript
            });
            resetTranscript();
            let analysisResult = await getAnalysis(updatedQuestionJson);

            sessionStorage.setItem('finalJson', JSON.stringify(updatedQuestionJson));
            sessionStorage.setItem('finalAnalysisJson', JSON.stringify(analysisResult));
            navigate('/thanks');
            setLoading(false);
        } else {
            updatedQuestionJson.push({
                ...filteredQuestion[0],
                answer: transcript
            })
            questionIndex.current++;
            resetTranscript();
            setLoading(false);
        }
    }

    return (
        <div className='container-fluid'>
            <div className='container py-3 my-3 d-flex flex-column align-items-center justify-content-center'>
                <div className='mb-3'>
                    <img src='./assets/skillscout-logo.jpg' alt='skillscout-logo'></img>
                </div>
                <div className='mb-3'>
                    <p><b><i>Question {`${filteredQuestion[0].id}/${questionJson.length}`}:- </i></b><span>{filteredQuestion[0].question}</span></p>
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
                    <button className='btn btn-success ' onClick={() => handleNextClick()}>{questionJson.length === questionIndex.current ? 'Submit' : `Next Question >`}</button>
                </div>
            </div>
            {loading && <Loader />}
        </div>
    )
}

export default InterviewPage;