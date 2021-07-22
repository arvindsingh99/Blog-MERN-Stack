import React from 'react'
import './Write.css'
function Write() {
    return (
        <div className="write">
            <img src="https://images.unsplash.com/photo-1542300058-849d3b08aa0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
             alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" className="writeInput" placeholder="Title" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder="Tell yourStory..." className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
