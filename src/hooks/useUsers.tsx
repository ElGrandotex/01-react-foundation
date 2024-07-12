import { useEffect, useRef, useState } from "react";
import type{ User, UserListResponse } from "../interfaces";
import axios from "axios";

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<UserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        })
        return data.data;
    } catch (error) {
        console.log('error');
        return [];
    }
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const currectPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currectPageRef.current).then(setUsers)
        //Eso es lo mismo que esto:
        // loadUsers().then( users => setUsers(users))
    }, [])

    const nextPage = async() => {
        currectPageRef.current++;
        const users = await loadUsers(currectPageRef.current);
        if (users.length > 0) {
            setUsers(users)
        }else {
            currectPageRef.current--;
        }
    }

    const prevPage = async() => {
        if (currectPageRef.current < 1) {
            return;
        }
        currectPageRef.current--;
        const users = await loadUsers(currectPageRef.current);
        setUsers(users)
    }
  
    return {
        //Propiedades
        users,
        //Metodos
        prevPage,
        nextPage}
  
}
