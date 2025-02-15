import { Link } from "react-router-dom";

import "./Letter.css";

function Letter() {
  return (
    <div className="letter-container">
      <div className="letter-page">
        <div className="letter-title">
          <img className="moving-heart" src="/letter/moving-heart.gif" />
          Happy Valentine&apos;s Day Lovely!
        </div>
        <div className="letter-p">
          Very happy to have been with you for 1.5 years now. We have done so
          many fun things together and made so many nice memories, I look
          forward to all the stuff we will do together in the future :&#41;
        </div>
        <div className="letter-p">
          Most importantly, you are my shoulder to cry on, the person who
          caresses me gently with so much love, the one who gives me
          never-ending kisses that I can&apos;t get enough of, the man who makes
          the world a little less scary by being by my side, and the one I want
          to stay hopelessly in love with. You have made the world a better
          place for me to exist ever since I have known you. My only wish is to
          give you as much love as you have given me during all this time.
        </div>
        <div className="letter-p">
          I cannot wait to experience the many many more wonders of life with
          you - there is so much more to come.
        </div>
        <div className="letter-p">I love you, my honeyest bun,</div>
        <img className="signature" src="/letter/signature.jpeg" />
        <img className="kiss" src="/letter/kiss.png" />
      </div>
      <Link tabindex="-1" to="/">
        <button className="letter cute-button" type="button">
          Go back
        </button>
      </Link>
    </div>
  );
}

export default Letter;
