import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import { useWebSocket } from "./WebSocketProvider";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [value, setValue] = useState("");
  const ws = useWebSocket();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:3000");
  //   wsRef.current = ws;
  // }, []);

  function handleSubmit() {
    console.log(ws);
    console.log(value);
    if (ws) {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: value,
          },
        })
      );
      navigate("/chat");
    }
    else{
      console.log("Error occured");
    }
  }
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <InputBox
        placeholder="Enter the ID"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Button content="Join" onClick={handleSubmit} />
    </div>
  );
}
