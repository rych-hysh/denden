import Button from "@mui/material/Button"
import logo from "../logo.svg";
function Title(){


	return (
		<>
		<h1>denden</h1>
		<img src={logo} className="App-logo" style={{display:"block"}}></img>
		<Button variant="contained" href="/lobby">start</Button>
		</>
	);
}

export default Title;