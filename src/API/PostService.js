import axios from "axios";
// import { config } from "react-transition-group";

export default class PostService {
    static async getAll(Limit = 10, page = 1) {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: Limit,
                _page: page
            }
        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
    }

    static async getCommentsById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/{id}/comments');
        return response;
    }
};

