import { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

function Button({ text, callback }) {
  return (
    <button className="cute-button" type="button" onClick={callback}>
      {text}
    </button>
  );
}

function Quiz() {
  const [page, setPage] = useState(-1);
  const quizQuestions = [
    {
      question: "Who is my most played Valorant agent of all time?",
      options: ["Fade", "Omen", "Killjoy", "Sage", "Sova"],
      correctAnswer: "Sage",
      imgSrc: "/quiz-photos/jett-heart.jpg",
    },
    {
      question: "How many minutes of Spotify did I listen to in 2024?",
      options: ["40-49k", "50-59k", "60-69k", "70-79k", "80-89k"],
      correctAnswer: "80-89k",
      imgSrc: "/quiz-photos/headphone-heart.jpg",
    },
    {
      question: "What was my dog's name back in the United States?",
      options: ["Lucky", "Louie", "Buddy", "Milo", "Rocky"],
      correctAnswer: "Louie",
      imgSrc: "/quiz-photos/dog-heart.jpg",
    },
    {
      question: "What is my go-to Subway order?",
      options: [
        "Italian BMT",
        "Steak and Cheese",
        "Spicy Italian",
        "Meatball Marinara",
        "Cold Cut Combo",
      ],
      correctAnswer: "Italian BMT",
      imgSrc: "/quiz-photos/sandwich-heart.jpg",
    },
    {
      question: "Which of these names did I NOT give a plushie?",
      options: ["Dotty", "Jelly", "Puffy", "Teddy", "Peter"],
      correctAnswer: "Jelly",
      imgSrc: "/quiz-photos/bear-heart.jpg",
    },
    {
      question: "Who was my first friend when I moved to Canada?",
      options: ["Jane", "Lauren", "Angela", "Floria", "Vicky"],
      correctAnswer: "Vicky",
      imgSrc: "/quiz-photos/friend-heart.jpg",
    },
    {
      question: "What is my favorite body part of yours?",
      options: ["Eyes", "Smile", "Shoulders", "Hands", "Arms"],
      correctAnswer: "Shoulders",
      imgSrc: "/quiz-photos/human-heart.jpg",
    },
    {
      question: "Who do I love?",
      options: ["You"],
      correctAnswer: "You",
      imgSrc: "/quiz-photos/rabbit-heart.jpg",
    },
  ];

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
        <img
          className={`quiz-next-button ${correctClicked ? "" : "hidden"}`}
          src="/quiz-photos/next-button.svg"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </>
    );
  }

  function Homepage() {
    return (
      <>
        <h1 className="quiz-title">Do you know your girlfriend?</h1>
        <Button
          text="Play"
          callback={() => {
            setPage(0);
          }}
        />
      </>
    );
  }

  function End() {
    return (
      <>
        <h1 className="quiz-title">Good Job!</h1>
        <Link tabindex="-1" to="/">
          <Button text="Go back" callback={() => {}} />
        </Link>
      </>
    );
  }

  return (
    <div className="quiz-container">
      {page === -1 && <Homepage />}
      {page > -1 && page < quizQuestions.length && (
        <QuizPage
          question={quizQuestions[page].question}
          options={quizQuestions[page].options}
          correctAnswer={quizQuestions[page].correctAnswer}
          imgSrc={quizQuestions[page].imgSrc}
        />
      )}
      {page >= quizQuestions.length && <End />}
    </div>
  );
}

export default Quiz;
