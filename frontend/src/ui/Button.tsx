interface ButtonType{
    content: string;
    onClick: () => void;
}

export default function Button(props: ButtonType){
    return (
        <div>
            <button onClick={props.onClick} className="border-none bg-blue-600 text-white text-lg px-4 py-2 rounded-lg">{props.content}</button>
        </div>
    )
}