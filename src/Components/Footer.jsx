import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tripzky</h1>
          <p>Choose your favouriten destination.</p>
        </div>
        <div>
          <a href="">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="https://cvexpresscom.netlify.app/">CV Express</a>
          <a href="https://e-commerce-web-cara.netlify.app/">E Commerce</a>
          <a href="">Changelog</a>
          <a href="/">Changelog</a>
        </div>
      </div>
      <div className="alright-tag">
        <p>
          <i class="fa-regular fa-copyright"></i>All rights reserved Umair Riyas
        </p>
      </div>
    </div>
  );
};
export default Footer;
