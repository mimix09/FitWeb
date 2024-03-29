import "../style/omnie.css";

function Omnie(){
    return(
        <div>
            <div className="aboutmeasd">
                <div>
                <h1>Jestem Jarek</h1>
                <p>I jestem trenerem personalnym</p>
                <p>Dowiedz się jak mogę Tobie pomóc osiągnąć wymarzoną figurę, ciało, itp.</p>
                <p>ps. zamiast tego tła wstawi się jakieś zdjęcie</p>
                </div>
            </div>

      <div className="kontener">
        <div className="otrz">
          <h1>Doświadczenie</h1>
          <div>
            <div>
              <img src="./app/assets/Education.ico" alt="zdj1" />
              <div>
                <h2>Kwalifikacje</h2>
                <p>Uczęszczałem na Akademię Wychowania Fizycznego. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus vero incidunt obcaecati ipsam totam voluptates nisi harum perspiciatis id atque, deleniti quis quo optio ex corrupti dolores? Tempora, officiis?</p>
              </div>
            </div>
            <div>
              <img src="./app/assets/Gym.ico" alt="zdj2" />
              <div>
                <h2>Doświadczenie</h2>
                <p>Od ponad 5 lat aktywnie ćwiczę. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident qui reiciendis, aspernatur corrupti labore neque aperiam quasi accusamus voluptate nisi atque culpa soluta ut necessitatibus eum earum, laudantium quae?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="zdjecia_onas">
        <div>
          <img src="./app/assets/personal-traning.webp" alt="z1" />
          <img src="./app/assets/hantle.jpg" alt="z2" />
        </div>
      </div>

      <div className="another_cont">
        <div>
          <h1>Zainteresowania/Pasja</h1>
          <p>Trenowanie oraz regularne ćwiczenie dla mnie to nie tylko sposób na utrzymanie dobrej sylwetki oraz sprawności fizycznej, dla mnie aktywny tryb życia i regularne ćwiczenia to pasja oraz moje zainteresowanie, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni veniam at. Adipisci ducimus delectus fugit ad est impedit, vero, tempora vitae odit similique incidunt modi omnis iure suscipit sit!</p>
        </div>
        <hr />
        <div>
          <h1>Staż</h1>
          <p>Mój aktualny staż na siłowni wynosi około 5 lat, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quo corrupti ducimus omnis dolorum autem harum tempore neque perspiciatis esse ut laborum consequatur animi similique delectus, aspernatur cupiditate, dolor nam.</p>
        </div>
        <hr />
        <div>
          <h1>Moje podejście do siłowni</h1>
          <p>Według mnie siłownia to nie tylko puste ćwiczenia, które dają wyłącznie lepszą budowę ciała oraz sprawność fizyczną, jest to również sposób na zmienienie czegoś, ulepszenie siebie samego. Siłownia wiele uczy np. samodyscypliny. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit, cum consequatur, facere incidunt earum optio officia exercitationem est non ipsum mollitia modi. Possimus illo dicta facere officiis, voluptatibus non.</p>
        </div>
      </div>
    </div>
    );
}

export default Omnie;