import React from 'react';
import './styles.css';

export const XSS2 = () => {
    const data = 'lorem ipsum <img src="" onerror="alert(\'message\');" />';

    return (
        <div
            dangerouslySetInnerHTML={{ __html: data }}
        />
    );
};

export const XSS = () => {
    const defaultValue = '<img onError=alert(\'Hacked.\') src=\'invalid.url.com\'>';
    const [value, setValue] = React.useState(defaultValue);
    const divRef = React.useRef(document.createElement('div'));

    return (
        <div className="App">
            <h1>React XSS example</h1>
            <h2>Put something dangerous in the input below and press Send.</h2>

            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <div>
                <button
                    onClick={() => {
                        divRef.current.innerHTML = value;
                    }}
                >
                    Send
                </button>
            </div>
            <div ref={divRef}></div>
        </div>
    );
};
