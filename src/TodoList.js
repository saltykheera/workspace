// TodoList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const {
    profilePicture,
    name,
    username,
    upvotes,
    downvotes,
    question,
    answer
  } = props;
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(null);

  const handleVote = (type) => {
    if (voted === type) {
      setVotes(0);
      setVoted(null);
    } else {
      setVotes(type === "upvote" ? votes + 1 : votes - 1);
      setVoted(type);
    }
  };

  return (
    <div className="post-cont">
      <div className="post-upper">
        <img src={profilePicture} alt="Profile" className="pfp" />
        <div className="name-username">
          <span className="name">{name}</span>
          <span className="username">{username}</span>
        </div>
      </div>
      <div className="post-down">
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};

const TodoList = ({ todos, deleteTodo }) => {
  const post1 = {
    profilePicture: "1.png",
    name: "John Doe",
    username: "johndoe123",
    upvotes: 10,
    downvotes: 5,
    question: "What is the capital of Germany?",
    answer: "Berlin"
  };

  const post2 = {
    profilePicture: "2.png",
    name: "ding dong",
    username: "dingdong123",
    upvotes: 15,
    downvotes: 3,
    question: "How many continents are there?",
    answer: "There are seven continents."
  };

  const post3 = {
    profilePicture: "3.png",
    name: "Bob Johnson",
    username: "bobjohnson789",
    upvotes: 15,
    downvotes: 3,
    question: "What is the largest mammal?",
    answer: "Blue Whale"
  };

  const post4 = {
    profilePicture: "4.png",
    name: "Alice Brown",
    username: "alicebrown010",
    upvotes: 12,
    downvotes: 7,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci"
  };

  const post5 = {
    profilePicture: "5.png",
    name: "Charlie Wilson",
    username: "charliewilson222",
    upvotes: 20,
    downvotes: 4,
    question: "What is the currency of Japan?",
    answer: "Japanese Yen"
  };

  return (
    <div className="all-post">
      <Link to="/Post1" className="link-style">
        <Post {...post1} />
      </Link>
      <Link to="/Post2" className="link-style">
        <Post {...post2} />
      </Link>
      <Link to="/Post3" className="link-style">
        <Post {...post3} />
      </Link>
      <Link to="/Post4" className="link-style">
        <Post {...post4} />
      </Link>
      <Link to="/Post5" className="link-style">
        <Post {...post5} />
      </Link>
    </div>
  );
};

export default TodoList;
