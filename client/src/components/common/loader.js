import React from 'react'

const Loader = (loading) => {
    return (
        <div className="modal-1" >
            <div className="modal-dialog modal-dialog-centered d-flex align-items-center justify-content-center">
                <div className="modal-content " style={{ width: 'fit-content', backgroundColor: 'transparent', border: 'none' }}>
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;
