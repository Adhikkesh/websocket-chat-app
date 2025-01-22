interface InputBoxType{
    placeholder: string;
    onChange: () => void;
}

export default function InputBox(props: InputBoxType){
    return (
        <div>
            <input placeholder={props.placeholder} onChange={props.onChange} className="w-96 py-2 px-2 rounded-lg border-2 border-gray-100 focus:ring-blue-500 focus:border-blue-500"></input>
        </div>
    )
}