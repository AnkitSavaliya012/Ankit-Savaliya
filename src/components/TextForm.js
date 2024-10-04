import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        const upperText = text.toUpperCase();
        setText(upperText);
    };

    const handleLoClick = () => {
        const upperText = text.toLowerCase();
        setText(upperText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-info mx-2 my-2" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn btn-info mx-2 my-2" onClick={handleLoClick}>
                Convert to lowercase
            </button>
        </div>
        <div className="container my-4">
            <h4><b>Your Text Summary</b></h4>
            <p>{text.split (" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split (" ").length} minuts of reads this text</p>
            <h5><b>Preview</b></h5>
            <p>{text}</p>
        </div>
        </>
    );
}
