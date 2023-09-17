import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './common/loader';
const API_URL = 'http://localhost:5000'

const sampleData = [
    {
        "id": "1",
        "question": "What is React?"
    },
    {
        "id": "2",
        "question": "What is react-dom?"
    },
    {
        "id": "3",
        "question": "Explain the concept of Virtual DOM in React."
    },
    {
        "id": "4",
        "question": "How does React handle state management?"
    },
    {
        "id": "5",
        "question": "What are components in React? How do you create a component?"
    }
]

const StartPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        "technology": "React.js",
        "experience": "0",
    });
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault()
        console.log('hi', formData)

        try {
            let response = await fetch(`${API_URL}/generate-questions`, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            console.log(response);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            sessionStorage.setItem('questionJson', JSON.stringify(sampleData));
            navigate('/interview')
        }
    }

    return (
        <div className='container-fluid d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='container d-flex align-items-center justify-content-center' style={{ width: '40vw' }}>
                <div className='form-box' style={{ width: '100%' }} >
                    <h1 className='mb-3 text-center'>Skill Scout</h1>
                    <form className='d-flex flex-column shadow-lg p-3 rounded' style={{ backgroundColor: '#DCCCFF' }} onSubmit={(e) => handleSubmit(e)}>
                        <div className='mb-3'>
                            <label className='mb-1'>Technology<span className='text-danger'> *</span></label><br />
                            <select value={formData.technology} name='technology' className="form-select mb-3" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    "technology": e.target.value
                                });
                                console.log(e.target.value)
                            }} aria-label="Default select example">
                                <option value="React.js">React.js</option>
                                <option value="Node.js">Node.js</option>
                                <option value="Database">Database</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1'>Experience<span className='text-danger'> *</span></label><br />
                            <select value={formData.experience} name='experience' className="form-select" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    "experience": e.target.value
                                })
                            }} aria-label="Default select example">
                                <option value="0">Fresher</option>
                                <option value="1">One Year</option>
                                <option value="2">Two Years</option>
                                <option value="3">Three Years</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1'>Upload Resume</label>
                            <input className="form-control form-control-lg" id="formFileLg" type="file" accept='.pdf'></input>
                        </div>
                        <button className='btn btn-primary text-center' type='submit'>Start Interview</button>
                    </form>
                </div>
                {loading && <Loader />}
            </div>
        </div >
    )
}

export default StartPage;

