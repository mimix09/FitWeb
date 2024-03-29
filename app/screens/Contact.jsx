import "../style/kontakt.css";

function Contact() {
  return (
    <div>

      <div className="container">
        <div>
          <div className="wysylanie">
            <h1>Napisz</h1>
            <div>
              <input type="text" placeholder="Imie" />
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Temat" />
            </div>
            <div>
              <textarea
                name="jeden"
                id="jeden"
                placeholder="Wiadomość"
              ></textarea>
            </div>
            <div>
              <button>Wyślij</button>
            </div>
          </div>

          
          <div className="show">
            <div className="linia"></div>
            <div className="info">
              <h1>Kontakt</h1>
              <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:marcin@gmail.com">
                  <p>
                    <strong>Email:</strong> email@gmail.com
                  </p>
                </a>
              </div>
              <div>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:123-456-789">
                  <p>
                    <strong>Telefon:</strong> 4732894732
                  </p>
                </a>
              </div>
              <div>
                <i className="fa-brands fa-facebook"></i>
                <a
                  href="https://www.facebook.com/?locale=pl_PL"
                  target="_blank"
                >
                  <p>
                    <strong>Facebook</strong>
                  </p>
                </a>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/" target="_blank">
                  <p><strong>Instagram</strong></p>
                </a>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i>
                <a href="https://twitter.com/home" target="_blank">
                  <p><strong>Twitter</strong></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hide">
          <div className="info">
            <h1>Kontakt</h1>
            <div className="info_grid1">
              <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:marcin@gmail.com">
                  <p>
                    <strong>Email:</strong> email@gmail.com
                  </p>
                </a>
              </div>
              <div>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:123-456-789">
                  <p>Telefon: 4732894732</p>
                </a>
              </div>
            </div>
            <div className="info_grid2">
              <div>
                <i className="fa-brands fa-facebook"></i>
                <a
                  href="https://www.facebook.com/?locale=pl_PL"
                  target="_blank"
                >
                  <p>Facebook</p>
                </a>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/" target="_blank">
                  <p>Instagram</p>
                </a>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i>
                <a href="https://twitter.com/home" target="_blank">
                  <p>Twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.257164530696!2d19.923901428019764!3d50.04732882382347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1710676384614!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
