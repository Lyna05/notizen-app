import useFetch from "react-fetch-hook";
import { Note } from "../types/notes.types";

export const useGetNotes = () => {
    const { isLoading, data, error } = useFetch<Note[]>("http://localhost:3000/notes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Lyne'
        }
    });

    return {isLoading, data, error} 
}