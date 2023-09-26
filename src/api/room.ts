import { resolve } from "path"

export const createRoomApi = () => {
	return new Promise((resolve, reject) => {
		fetch("/").then((res) => res.json()).then((res) => {
			resolve(res);
		})
	})
}
