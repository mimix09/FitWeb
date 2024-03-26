import "../style/pakiety.css";

function Pakiety(){
    return (
        <div>
            <div className="container_pakiety">
                <div className="block">
                    <h1>Bronze</h1>
                    <h2>60zł</h2>
                    <h3>W ofercie:</h3>
                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porady</li>
                    </ul>
                    <a href="">Kup</a>
                </div>

                <div className="block">
                    <h1>Gold</h1>
                    <h2>120zł</h2>
                    <h3>W ofercie:</h3>
                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porade</li>
                        <li>Dieta</li>
                    </ul>
                    <a href="">Kup</a>
                </div>

                <div className="block">
                    <h1>Platinium</h1>
                    <h2>200zł</h2>
                    <h3>W ofercie:</h3>
                    <ul>
                        <li>Plan Treningowy</li>
                        <li>Porade</li>
                        <li>Dieta</li>
                        <li>Wspólne treningi</li>
                    </ul>
                    <a href="">Kup</a>
                </div>
            </div>
        </div>
    );
}

export default Pakiety;