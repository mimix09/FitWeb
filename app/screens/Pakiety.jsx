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

                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porade</li>
                        <li>Dieta</li>
                    </ul>

                    <a href="">Zamów plan</a>
                </div>


                <div className="block">
                    <h1>Gold</h1>
                    <ProgressBar progress={1/2} />
                    <h2>120zł</h2>
                    <h3>W ofercie:</h3>
                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porade</li>
                        <li>Dieta</li>
                    </ul>
                    <a href="">Zamów plan</a>
                </div>

                <div className="block">
                    <h1>Platinium</h1>
                    <ProgressBar progress={1} />
                    <h2>200zł</h2>
                    <h3>W ofercie:</h3>
                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porade</li>
                        <li>Dieta</li>
                        <li>Wspólne treningi</li>
                    </ul>
                    <a href="">Zamów plan</a>
                </div>
            </div>
        </div>
    );
}

export default Pakiety;