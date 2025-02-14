import { useState } from "react";
import "./Quiz.css";

function Button({ text }) {
  return (
    <button className="cute-button" type="button">
      {text}
    </button>
  );
}

function QuizPage({ question, options, correctAnswer, imgSrc }) {
  const [correctClicked, setCorrectClicked] = useState(false);
  const [clickedOptions, setClickedOptions] = useState(new Set());

  function QuizButton({ option, callback }) {
    let classNames = "quiz cute-button";
    if (clickedOptions.has(option)) {
      classNames += " clicked";
      if (option != correctAnswer) {
        classNames += " wrong";
      } else {
        setCorrectClicked(true);
        classNames += " correct";
      }
    }

    return (
      <button className={classNames} type="button" onClick={callback}>
        {option}
      </button>
    );
  }

  return (
    <>
      <h2 className="quiz-question">{question}</h2>
      <img className="quiz-image" src={imgSrc} />
      <div className="quiz-options-container">
        {options.map((option) => {
          return (
            <QuizButton
              key={option}
              option={option}
              callback={() => {
                if (!correctClicked) {
                  setClickedOptions(new Set([...clickedOptions, option]));
                }
              }}
            />
          );
        })}
      </div>
      {/* <img
        className={`quiz-next-button ${correctClicked ? "" : "hidden"}`}
        src="/public/quiz-photos/next-button.svg"
      /> */}
    </>
  );
}

function Homepage() {
  return (
    <>
      <h1 className="quiz-title">Do you know your girlfriend?</h1>
      <Button className="quiz-play" text="Play" />
    </>
  );
}

function Quiz() {
  const [showHomepage, setHomepage] = useState(true);

  const [page, setPage] = useState([]);
  return (
    <div className="quiz-container">
      {!showHomepage && <Homepage />}
      <QuizPage
        question="What?"
        options={["Huh?", "Bruh?"]}
        correctAnswer="Bruh?"
        imgSrc="/public/quiz-photos/bear-heart.jpg"
      />
    </div>
  );
}

export default Quiz;
