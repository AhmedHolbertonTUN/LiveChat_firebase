import {
  IonIcon,
  IonHeader,
  IonApp,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { chatbubblesOutline } from "ionicons/icons";
import React, { useState } from "react";

const Home: React.FC = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleClick = () => {
    if (name.trim() !== "" && room.trim() !== "") {
      history.push(`/test/${room}/${name}`);
    } else {
      alert("Please fill out all required fields !");
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark">
          <IonIcon
            slot="start"
            size="large"
            style={{ marginLeft: "15px", color: "#C085FF" }}
            icon={chatbubblesOutline}
          />
          <IonTitle>
            <strong style={{ color: "#C085FF" }}>FireChat</strong>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <div>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
            </svg>
          </div>
        </IonRow>
        <IonRow>
          <form>
            <label>Nickname * :</label>
            <br />
            <input
              className="login"
              type="text"
              placeholder="Nickname.."
              onChange={(e) => setName(e.target.value)}
            />
            <label>Room * :</label>
            <br />
            <input
              className="login"
              type="text"
              placeholder="Room.."
              onChange={(e) => setRoom(e.target.value)}
            />
            <button className="btn" onClick={handleClick}>
              GO <i className="fa fa-sign-in" style={{ fontSize: "18px" }} />
            </button>
          </form>
        </IonRow>
      </IonGrid>
    </IonApp>
  );
};

export default Home;
