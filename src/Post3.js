import React, { useState } from "react";

function Post3() {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(null);
  const upvotes = 7;
  const downvotes = 3;
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
    <div>
      <div className="posta-cont">
        <div className="usera">
          <div className="up_dnbtn">
            <button
              className="up"
              onClick={() => handleVote("upvote")}
              disabled={voted === "upvote"}
            >
              {upvotes + votes} UP
            </button>
            <button
              className="dn"
              onClick={() => handleVote("downvote")}
              disabled={voted === "downvote"}
            >
              {downvotes - votes} DN
            </button>
          </div>
          <div className="user-detail">
            {" "}
            <img src="3.png" alt="" className="pfp" />
            <div className="namea">
              <div className="namea">Bob johnson</div>
              <div className="usernamea">@bobjohnson</div>
            </div>
          </div>
        </div>
        <div className="ques-container">
          {" "}
          <div className="questiona">
            what is the largest mammal in the world
          </div>
          <p className="answera">
            The Blue Whale, Earth's largest mammal, dominates oceans with
            immense size and distinctive blue-gray color. Conservation efforts
            strive to protect this majestic species.
          </p>
        </div>
        <div className="image-gallery">
          <img src="b1.jpg" alt="" className="image-forum" />
          <img src="b2.jpg" alt="" className="image-forum" />
          <img src="b3.jpg" alt="" className="image-forum" />
        </div>
      </div>
      <div className="comment">
        <h1>Comment</h1>
        <CommentSection />
      </div>
    </div>
  );
}

function CommentSection() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddComment() {
    setComments([...comments, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a comment"
        />
        <button type="button" className="cmt-btn" onClick={handleAddComment}>
          Comment
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} username="Username" comment={comment} />
        ))}
      </div>
    </div>
  );
}

function Comment({ username, comment }) {
  const [heart, setheart] = useState(false);
  function hanH() {
    setheart(!heart);
  }
  return (
    <div className="usercomment">
      <img src="" alt="" className="pfp" />
      <div className="comment-text">
        <div>Manas Madan</div>
        <div>{comment}</div>
        <div>
          <button onClick={hanH}>{heart ? "❤️" : "🤍"}</button>
        </div>
      </div>
    </div>
  );
}

export default Post3;
