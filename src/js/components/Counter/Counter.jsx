import React from "react";

const SecondsCounter = ({ seconds }) => {
    const digitOne = Math.floor(seconds / 1) % 10;
    const digitTwo = Math.floor(seconds / 10) % 10;
    const digitThree = Math.floor(seconds / 100) % 10;
    const digitFour = Math.floor(seconds / 1000) % 10;
    const digitFive = Math.floor(seconds / 10000) % 10;
    const digitSix = Math.floor(seconds / 100000) % 10;

    return (
        <div className="d-flex justify-content-center bg-dark text-white p-3 fs-1">
            <div className="border rounded p-2 mx-1">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="border rounded p-2 mx-1">{digitSix}</div>
            <div className="border rounded p-2 mx-1">{digitFive}</div>
            <div className="border rounded p-2 mx-1">{digitFour}</div>
            <div className="border rounded p-2 mx-1">{digitThree}</div>
            <div className="border rounded p-2 mx-1">{digitTwo}</div>
            <div className="border rounded p-2 mx-1">{digitOne}</div>
        </div>
    );

};


export default SecondsCounter;