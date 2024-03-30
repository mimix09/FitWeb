import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../style/stronaGlowna.css";


// Napisałem tą funkcje tylko dlatego że nie chciało mi się pisać "style={{fontWeight:"600"}}" za każdym razem lol
function Weight({children}){
  return(
    <span style={{fontWeight:"600"}}>{children}</span>
  )
}

function StronaGlowna() {

  ////// ten kod sprawia, że obrazki się wyświetlają poprawnie, raz obrazek pierwszy, a raz drugi (mobilność), bo ja tam widziałem, że to było wcześniej w css zrobione i ja to skasowałem,
  //  a potem stwierdziłem że to w sumie było całkiem fajnie zrobione, ale nie wiedziałem jak to naprawić, więc zrobiłem to coś w JS xD
    const [szmol, setSzmol] = useState(window.innerWidth < 830);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 830);
      };
      window.addEventListener('resize', handleResize);
      return () => {window.removeEventListener('resize', handleResize);};
    }, []);


  return (
    <div>
      <div className="block_color">
        <img alt="background image"/>
        <div>
          <div>
            <h1>Treningi personalne</h1>
            <p>"Idź na siłke byczq i bądź dojebany"</p>
          </div>
        </div>
      </div>

      <div className="main_container">
        <div className="otrzymasz">
          <h1>Co ci mogę zaoferować?</h1>
          <div>
            <div>
              <img style={{width:"100px"}} src="https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fapple.ico?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559" alt="zdj1" />
              <div>
                <h2>Diete</h2>
                <p>
                  Otrzymasz spersonalizowaną dietę, która pomoże Ci zrzucić/przybrać wagę.
                </p>
              </div>
            </div>
            <div>
              <img style={{width:"100px"}} src="https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2FDumbbell.ico?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559" alt="zdj2" />
              <div>
                <h2>Plan Treningowy</h2>
                <p>
                  Otrzymasz plan treningowy, który będzie spersonalizowany specjalnie pod Twoją budowę ciała, dietę oraz efekty, jakie chcesz uzyskać
                </p>
              </div>
            </div>
            <div>
              <img style={{width:"100px"}} src="https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2FDeadlift.ico?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559" alt="zdj2" />
              <div>
                <h2>Wspólne Treningi</h2>
                <p>
                  Będziesz miał szansę ćwiczyć pod okiem doświadczonego trenera personalnego, który pokaże Ci prawidłowe techniki wykonywania ćwiczeń
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tlo">
        <div className="about_block">
          <img src="https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fmichael.png?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559" alt="portret" loading="lazy"/>
          <div>
            <h1>O mnie</h1>
            <p>
            Jestem trenerem personalnym z Krakowa, mam 5-letnie doświadczenie w pomaganiu ponad 50 osobom osiągnąć cele fitnessowe. Moje podejście to motywacja i spersonalizowane wsparcie. Dołącz do mojego zespołu, razem osiągniemy Twoje cele i cieszmy się drogą do lepszej wersji siebie!            </p>
            <Link to="/kontakt" className="guzik">Czytaj dalej</Link>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="profits">
          <h1><span className="secondary">Korzyści</span> trenowania ze mną</h1>
          <div>
            <p>
              <strong>Spersonalizowane podejście</strong><br/> Dzięki mojej indywidualnej uwadze i doświadczeniu, dostosowuję treningi do Twoich unikalnych celów, umiejętności i potrzeb, zapewniając efektywność i bezpieczeństwo podczas każdej sesji.
            </p>
            <p>
              <strong>Motywacja i wsparcie</strong><br/> Jako trener personalny nie tylko dostarczam Ci planów treningowych, ale również jestem Twoim motywatorem i wsparciem przez całą drogę. Pomagam Ci pokonywać przeszkody, utrzymywać wysoki poziom motywacji i kierować Cię w kierunku sukcesu.
            </p>
            <p>
              <strong>Zróżnicowane i efektywne treningi</strong><br/> Moja wiedza i kreatywność pozwalają mi stworzyć różnorodne i interesujące treningi, które nie tylko przynoszą rezultaty, ale również sprawiają, że trening staje się przyjemnością. Dzięki temu unikamy rutyny i stale motywujemy się do dalszego rozwoju.
            </p>
          </div>
          <Link to="/kontakt" className="guzik">Napisz do mnie!</Link>
        </div>
      </div>

      <div className="tlo">
        <div className="other_container">
          <h1 style={{textAlign:"center", margin:"20px 0 70px 0"}}>Moje usługi: Co oferuje?</h1>
          <div className="mini_gallery">
            <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fdiet.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/>
            <div>
              <h1>Dieta</h1>
              <p>
                Dostarczam spersonalizowane plany żywieniowe, dopasowane do Twoich celów i preferencji. Chcę, abyś otrzymał wszystkie <Weight>niezbędne składniki</Weight> odżywcze, które pomogą Ci w treningach i osiągnięciu Twoich celów
              </p>
            </div>
          </div>
          <div className="mini_gallery">
            {szmol ? <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fpersonal_trainer.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/> : <></>}
            <div>
              <h1>Treningi personalne</h1>
              <p>
                Mam dla Ciebie indywidualne sesje treningowe, które dostosuję do <Weight>Twoich celów i umiejętności</Weight>. Podczas każdej sesji będziesz miał pełne wsparcie i motywację, aby osiągnąć najlepsze wyniki
              </p>
            </div>
            {szmol ? <></> : <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fpersonal_trainer.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/>}
          </div>
          <div className="mini_gallery">
            <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fplan1.2.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/>
            <div>
              <h1>Plan Treningowy</h1>
              <p>
                Przygotuję dla Ciebie spersonalizowany plan treningowy, który będzie obejmował <Weight>różnorodne formy treningu</Weight>, dostosowane do Twojego harmonogramu i poziomu zaawansowania. Razem skupimy się na kompleksowym rozwoju i osiągnięciu Twoich celów
              </p>
            </div>
          </div>
          <div className="mini_gallery">
            {szmol ? <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fsuplement.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/> : <></>}
            <div>
              <h1>Suplementy</h1>
              <p>
                Doradzę Ci w kwestii suplementacji, dostosowując ją do Twoich potrzeb i celów. Razem dobierzemy <Weight>odpowiednie produkty</Weight>, które wesprą Twoje treningi, regenerację i ogólną kondycję
              </p>
            </div>
            {szmol ? <></>: <img style={{backgroundImage:`url("https://firebasestorage.googleapis.com/v0/b/kopcza.appspot.com/o/assets%2Fsuplement.jpg?alt=media&token=bdadca22-40db-4a4c-b9c6-164ae1eb5559")`}} loading="lazy"/>}
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
              Mieszkam w <strong className="secondary">Krakowie</strong> i prowadzę treningi na miejscu, ale również pomagam osobom spoza Krakowa w tworzeniu planów treningowych oraz diet
            </p>
            <div className="guzik" style={{maxWidth:"150px"}}>
              <Link to="/kontakt" style={{margin:"0"}}>Napisz do mnie!</Link>
            </div>
          </div>
        </div>
      </div>
  
    
    </div>
  );
}

export default StronaGlowna;
