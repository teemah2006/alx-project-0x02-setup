import {type PostModalProps} from '@/interfaces';
import { useState } from 'react';
const PostModal:React.FC<PostModalProps>  = ({onClose, onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return(
        <div className="modal">
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text" name="title" placeholder="title" value={title}
                onChange={(e)=> setTitle(e.target.value)}/>

                <label htmlFor="">Content</label>
                <input placeholder="content" name="content" 
                value={content} onChange={(e)=> setContent(e.target.value)}/>
            </form>
            <button onClick={onClose}>close</button>
            <button onClick={()=>onSubmit(title,content)}>submit</button>
        </div>
    )
}

export default PostModal;