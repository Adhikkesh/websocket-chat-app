import WebSocket, {WebSocketServer} from "ws";

const wss = new WebSocketServer({port: 3000});


interface User{
    roomId: string;
    socket: WebSocket;
}

const array: User[] = [];
wss.on("connection",(socket) => {
    socket.on("message",(message) => {
        const parseMessage = JSON.parse(message.toString());
        console.log(parseMessage);
        if(parseMessage.type == "join"){
            const roomId = parseMessage.payload.roomId;
            array.push({roomId: roomId, socket: socket});
            console.log(array)
        }

        if(parseMessage.type == "chat"){
            let user : User | null = null;
            for(let i=0;i<array.length;i++){
                if(array[i].socket == socket){
                    user = array[i];
                }
            }
            console.log(user);
            if(user){
                for(let i=0;i<array.length;i++){
                    if(user.roomId == array[i].roomId){
                        array[i].socket.send(parseMessage.payload.message);
                    }
                }
            }
        }
    })
})