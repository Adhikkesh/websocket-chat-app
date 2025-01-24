import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

export default function Join() {
  const [value, setValue] = useState("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    wsRef.current = ws;
  }, []);

  function handleSubmit() {
    wsRef.current?.send(
      JSON.stringify({
        type: "join",
        payload : {
            roomId : value
        }
      })
    );
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
