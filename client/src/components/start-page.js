import React from 'react'

const StartPage = () => {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='container d-flex align-items-center justify-content-center' style={{ width: '40vw' }}>
                <div className='form-box' style={{ width: '100%' }} >
                    <h1 className='mb-3 text-center'>Skill Scout</h1>
                    <div>
                        <div className='mb-3'>
                            <label>Technology</label><br />
                            <select className="form-select mb-3" aria-label="Default select example">
                                <option value="1" selected>React.js</option>
                                <option value="2">Node.js</option>
                                <option value="3">Database</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label>Experience</label><br />
                            <select className="form-select" aria-label="Default select example">
                                <option value="0">Fresher</option>
                                <option value="1">One Year</option>
                                <option value="2">Two Years</option>
                                <option value="3">Three Years</option>
                            </select>
                        </div>
                        <span className='align-self-center'>or</span>
                        <div>
                            <label>Upload Resume</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" accept='.pdf,.docx'></input>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default StartPage;

