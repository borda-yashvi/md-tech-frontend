import axios from 'axios';

const baseUrl = 'http://localhost:3003/user'


const instance = axios.create({
	baseURL: baseUrl,
	headers: () => ({
		'Content-Type': 'application/json',
	}),
})


export const addUser =(body)=>{
    return instance.post('add', body)
}

export const userList =(body)=>{
    return instance.get('list', body)
}