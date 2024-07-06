import React from 'react';
const MainContent: React.FC = () => {
    return (
        <div id="mainblock">
            <div id="faceImg">
                <img src="/i2.jpg" id="faceImg" style={{ boxShadow: '10px 10px 20px rgb(191, 191, 191)', borderRadius: '25px' }} />
                <div id="soclinks">
                    <p>Links:</p>
                    <a href="https://t.me/i_jeannee"><img src="/tg.png" style={{ height: '20px', marginLeft: '5px' }} /></a>
                    <a href="https://www.instagram.com/jannaspostcards?igsh=ZDQ1dDZhd2dxa3Bk&utm_source=qr"><img src="/inst.png" style={{ height: '20px', marginLeft: '5px' }} /></a>
                    <a href="https://wa.me/79279628644"><img src="/wa.png" style={{ height: '20px', marginLeft: '5px' }} /></a>
                </div>
            </div>
            <div id="info">
                <div className="textaboutme">
                    <h2> About me</h2>
                    <ul>
                        <li>I'm first-year bachelor student in IU</li>
                        <li>My hometown is Ufa</li>
                        <li>I graduated from lyceum 123 in Ufa.</li>
                        <li>Now I'm trying to dive into IT</li>
                    </ul>
                </div>
                <div style={{ height: '40px' }}></div>
                <div className="textaboutme">
                    <h2>My stack</h2>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML, CSS, JS</li>
                        <li>and I'm trying into UX/UI</li>
                    </ul>
                </div>
                <div id="comics" className="textaboutme">
                    <h2>latest work</h2>
                    <ul><a href="/comic">XKCD comic</a></ul>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
