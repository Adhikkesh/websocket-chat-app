import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import { useWebSocket } from "./WebSocketProvider";

export default function Chat() {
  const [message, setMessage] = useState<string[]>(["Hi"]);
  const [inputValue, setInputValue] = useState("");
  const ws = useWebSocket();

  useEffect(() => {
    if (ws) {
      //@ts-ignore
      ws.onmessage = (ev) => {
        setMessage((e) => [...e, ev.data]);
      };
      //@ts-ignore
      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
      };
    }
  }, []);

  function handleSubmit() {
    if (ws && inputValue.trim()) {
      //@ts-ignore
      ws.send(
        JSON.stringify({
          type: "chat",
          payload: {
            message: inputValue,
          },
        })
      );
    }
    setInputValue("");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl h-[80vh] mx-4">
        <div className="border-2 border-gray-800 rounded-lg flex flex-col h-full">
          <div className="flex-1 flex-col gap-4 overflow-y-auto p-4">
            {message.map((e, ind) => (
              <div key={ind} className="">
                {e}
              </div>
            ))}
          </div>
          <div className="p-4 flex gap-4">
            <InputBox
              value={inputValue}
              placeholder="Enter your Message"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button content="Send" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
