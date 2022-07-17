import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Looder from "../UI/Looder/Looder";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, Error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsById(id)
        setPost(response.data)
    })

    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return(
        <div>
            <h1>Э далбаеб посттын {params.id} - ыншы парпкшасын аштын</h1>
            {isLoading
                ?<Looder/>
                :<div>{post.id}. {post.title} </div>
            }
            <h1>Коментари

            </h1>
            {isComLoading
                ?<Looder/>
                : <div>
                    {comments.map( comm => 
                        <div style={{marginTop: 15}}>
                            <h5> {comm.email} </h5>
                            <div> {comm.body} </div>
                        </div>   
                    )}
                </div>
            }
        </div>
    )
}
 export default PostIdPage