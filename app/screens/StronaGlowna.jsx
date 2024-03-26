import { Link } from "react-router-dom";
import "../style/stronaGlowna.css";

function StronaGlowna() {
  return (
    <div>
      <div className="block_color">
        {/* <img src="./img/guy2.png" alt="zdj1"> */}
        <div>
          <h1>Treningi personalne</h1>
          <p>Idz na siłke byczqu i bądz dojebany</p>
        </div>
      </div>

      <div className="main_container">
        <div className="otrzymasz">
          <h1>Co dostaniesz?</h1>
          <div>
            <div>
              <img src="./app/assets/apple.ico" alt="zdj1" />
              <div>
                <h2>Diete</h2>
                <p>
                  Dostaniesz spersonalizowaną deite która pomorze tobie
                  zrzycic/przybrać wage
                </p>
              </div>
            </div>
            <div>
              <img src="./app/assets/Dumbbell.ico" alt="zdj2" />
              <div>
                <h2>Plan Treningowy</h2>
                <p>
                  Dostaniesz plan treningowy który będzie spersonalizowaną
                  specjalnie pod twoją budowę ciała, diete oraz efekty jakie
                  bedziesz chciał uzyskać
                </p>
              </div>
            </div>
            <div>
              <img src="./app/assets/Deadlift.ico" alt="zdj2" />
              <div>
                <h2>Wpsólne Treningi</h2>
                <p>
                  Będziesz miał szanse ćwiczyc pod okiem doświadczonego trenera
                  personalnego który zaprezentuje tobie prawidłowe techniki
                  wykonywania ćwiczeń
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tlo">
        <div className="about_block">
          <img src="./app/assets/portret.avif" alt="portret" />
          <div>
            <h1>O mnie</h1>
            <p>
              Siema jestem Janek i jestem trenerem personalnym od 5 lat,
              silownia to moja hobby i pasja. Kocham to robić odkąd skąńczyłem 5
              lat jestem w tym dobry i wgl, możesz kupić ten kurs żebym to ja
              tobie mógł pomóc
            </p>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="profits">
          <h1>Profity</h1>
          <div>
            <p>
              <strong>Pierwszy</strong> profit jest taki że zyskaz duzo z tego
              wszystkiego i wgl to się mega oplaca wiec warto to kupic byczq,
              pisze radnomowy teskt bo nie mam pojecia co pisac :|
            </p>
            <p>
              <strong>Drugi</strong> profit jest taki że zyskaz duzo z tego
              wszystkiego i wgl to się mega oplaca wiec warto to kupic byczq,
              pisze radnomowy teskt bo nie mam pojecia co pisac :|
            </p>
            <p>
              <strong>Trzeci</strong> profit jest taki że zyskaz duzo z tego
              wszystkiego i wgl to się mega oplaca wiec warto to kupic byczq,
              pisze radnomowy teskt bo nie mam pojecia co pisac :|
            </p>
          </div>
          <Link to="/kontakt">Zobacz więcej</Link>
        </div>
      </div>

      <div className="tlo">
        <div className="other_container">
          <div className="mini_gallery">
            <img src="./app/assets/dieta.webp" alt="dieta_zdj" />
            <div>
              <h1>Dieta</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                voluptatibus nulla provident dolorum aspernatur consequuntur
                voluptatum sapiente veniam architecto quia laborum voluptates
                consectetur cum, sunt, maxime alias illo ducimus mollitia.
              </p>
            </div>
          </div>
          <hr />
          <div className="first_block">
            <div className="mini_gallery">
              <div>
                <h1>Treningi personalne</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero voluptatibus nulla provident dolorum aspernatur
                  consequuntur voluptatum sapiente veniam architecto quia
                  laborum voluptates consectetur cum, sunt, maxime alias illo
                  ducimus mollitia.
                </p>
              </div>
              <img src="./app/assets/personal-traning.webp" alt="dieta_zdj" />
            </div>
          </div>
          <div className="second_block">
            <div className="mini_gallery">
              <img src="./app/assets/personal-traning.webp" alt="dieta_zdj" />
              <div>
                <h1>Treningi personalne</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero voluptatibus nulla provident dolorum aspernatur
                  consequuntur voluptatum sapiente veniam architecto quia
                  laborum voluptates consectetur cum, sunt, maxime alias illo
                  ducimus mollitia.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mini_gallery">
            <img src="./app/assets/workout2plan.webp" alt="dieta_zdj" />
            <div>
              <h1>Plan Treningowy</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                voluptatibus nulla provident dolorum aspernatur consequuntur
                voluptatum sapiente veniam architecto quia laborum voluptates
                consectetur cum, sunt, maxime alias illo ducimus mollitia.
              </p>
            </div>
          </div>
          <hr />
          <div className="first_block">
            <div className="mini_gallery">
              <div>
                <h1>Suplementy</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero voluptatibus nulla provident dolorum aspernatur
                  consequuntur voluptatum sapiente veniam architecto quia
                  laborum voluptates consectetur cum, sunt, maxime alias illo
                  ducimus mollitia.
                </p>
              </div>
              <img src="./app/assets/suple.jpg" alt="dieta_zdj" />
            </div>
          </div>
          <div className="second_block">
            <div className="mini_gallery">
              <img src="./app/assets/suple.jpg" alt="dieta_zdj" />
              <div>
                <h1>Suplementy</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero voluptatibus nulla provident dolorum aspernatur
                  consequuntur voluptatum sapiente veniam architecto quia
                  laborum voluptates consectetur cum, sunt, maxime alias illo
                  ducimus mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_container">
        <div className="lokalizacja">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.257164530696!2d19.923901428019764!3d50.04732882382347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1710676384614!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <h1>Gdzie można mnie znaleść</h1>
            <p>
              Personalnie jestem dostępny na terenie Krakowa, jesli chciałbym
              się z mną skontakować lub masz jakieś pytania co do treningu to
              skontaktyj się z mną
            </p>
            <div className="guzik">
              <Link to="/kontakt">kontakt</Link>
            </div>
          </div>
        </div>
      </div>
  
    
    </div>
  );
}

export default StronaGlowna;
