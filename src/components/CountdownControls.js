import React from 'react';

export default function CountdownControls({paused, onPaused, onResumed}) {
    return (
        <div className="field is-grouped is-grouped-centered">
            <p className="control">
                <button
                    className="button is-outlined is-primary is-rounded"
                    disabled={!paused}
                    onClick={onResumed}
                >
                    Resume
                </button>
            </p>
            <p className="control">
                <button
                    className="button is-outlined is-danger is-rounded"
                    disabled={paused}
                    onClick={onPaused}
                >
                    Pause
                </button>
            </p>
        </div>

    );
}