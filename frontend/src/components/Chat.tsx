import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

export default function Chat() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl h-[80vh] mx-4">
        <div className="border-2 border-gray-800 rounded-lg flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4"></div>
          <div className="p-4 flex gap-4">
            <InputBox placeholder="Enter your Message" onChange={() => {}} />
            <Button content="Send" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
