import Button from "@mui/material/Button";
import { createRoomApi } from "../api/room";
function Lobby(){
	const createRoom = () => {
		createRoomApi().then(res => console.log(res))
	};
	return (
		<div>
		<Button variant="contained" onClick={createRoom}> 部屋を作成 </Button>
		<Button variant="contained"> 部屋に参加 </Button>	
		</div>
	)
}

export default Lobby;