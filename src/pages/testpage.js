import {
  IonApp,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import fireDB from "../firebase/firebase";
import { useParams } from "react-router-dom";
import $ from "jquery";

const TestPage = () => {
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();

  const time = () => {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    if (mm > 9) return `${hh}:${mm}`;
    else return `${hh}:0${mm}`;
  };

  let { room } = useParams();
  let { user } = useParams();

  const messagesEnd = React.createRef();

  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState({});
  const [position, setPosition] = useState("absolute");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      author: user,
      body: message.trim(),
      date: time(),
    };
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    fireDB.child(`Room_${room}`).push(post);
    setMessage("");
  };
  useEffect(() => {
    fireDB.child(`Room_${room}`).on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setPosts({ ...snapshot.val() });
      } else setPosts({});
    });
  }, []);

  const change = () => {
    setPosition("relative");
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle id="google">
            <strong>{room} room</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
        <div
          className="msgBox"
          onMouseEnter={change}
          style={{ position: position }}
        >
          {Object.keys(posts).map((id) => {
            if (posts[id].author == user)
              return (
                <div className="guest right">
                  {posts[id].body}
                  <div style={{ textAlign: "right" }}>
                    <span>me at {posts[id].date}</span>
                  </div>
                </div>
              );
            else if (posts[id].author != user)
              return (
                <div className="item">
                  {posts[id].body}
                  <div style={{ textAlign: "right" }}>
                    <span>
                      {posts[id].author} at {posts[id].date}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>
        <div style={{ marginTop: "70px" }} ref={messagesEnd}></div>
      </IonContent>
      <IonFooter>
        <form onMouseEnter={() => setPosition("absolute")}>
          <div className="sendBox">
            <input
              className="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {message.trim() !== "" ? (
              <button className="sendBtn" onClick={handleSubmit}>
                <i className="fa fa-send-o icon"></i>
              </button>
            ) : (
              <button className="sendBtn" onClick={handleSubmit} disabled>
                <i className="fa fa-send-o icon"></i>
              </button>
            )}
          </div>
        </form>
      </IonFooter>
    </IonApp>
  );
};

export default TestPage;
