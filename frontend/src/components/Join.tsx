import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

export default function Join(){
    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <InputBox placeholder="Enter the ID" onChange={() => {}}/>
            <Button content="Join" onClick={() => {}}/>
        </div>
    )
}