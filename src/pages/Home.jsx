import { Link } from "react-router-dom";

import "./Home.css";

function Button({ text, link }) {
  return (
    <Link to={link}>
      <button className="cute-button" type="button">
        {text}
      </button>
    </Link>
  );
}

function SpinningHeart() {
  return (
    <div className="heart">
      <div className="heart-text">Happy Valentine&apos;s Day!</div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Button text="Take a quiz" link="/quiz" />
      <Button text="Open a letter" link="/quiz" />
      <Button text="Revisit memories" link="/quiz" />
      <Button text="Journey ahead" link="/quiz" />
      <SpinningHeart />
    </>
  );
}

export default Home;
