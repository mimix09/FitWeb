import "../style/pakiety.css";

function ProgressBar({ progress }) {
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress * 100}%` }}></div>
      </div>
    );
}

function Pakiety(){
    return (
        <div>
            <div className="container_pakiety">
                
                <div className="block">
                    <h1>Brown</h1>
                    <ProgressBar progress={1/4} />
                    <h2>60zł</h2>
                    <h3>W ofercie:</h3>

                    <div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Plan Treningowy</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Porade</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Dieta</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Wspólne treningi</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Protipy</p>
                        </div>
                    </div>


                    <a href="">Zamów plan</a>
                </div>


                <div className="block">
                    <h1>Gold</h1>
                    <ProgressBar progress={1/2} />
                    <h2>120zł</h2>
                    <h3>W ofercie:</h3>
                    <div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Plan Treningowy</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Porade</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Dieta</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Wspólne treningi</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-xmark"></i>
                            <p>Protipy</p>
                        </div>
                    </div>
                    <a href="">Zamów plan</a>
                </div>

                <div className="block">
                    <h1>Platinium</h1>
                        <ProgressBar progress={1} />
                    <h2>200zł</h2>
                    <h3>W ofercie:</h3>
                    <div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Plan Treningowy</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Porade</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Dieta</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Wspólne treningi</p>
                        </div>
                        <div className="dosrodkowanie">
                            <i className="fa-solid fa-check"></i>
                            <p>Protipy</p>
                        </div>
                    </div>
                    <a href="">Zamów plan</a>
                </div>
            </div>
        </div>
    );
}

export default Pakiety;