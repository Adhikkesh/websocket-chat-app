import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Entry(){
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <Button content="Join" onClick={() => {navigate("/join")}}/>
            {/* <Button content="Create" onClick={() => {navigate("/chat")}}/> */}
        </div>
    )
}