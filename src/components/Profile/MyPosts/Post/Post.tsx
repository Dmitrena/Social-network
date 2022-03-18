import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fshapka-youtube.ru%2Fwp-content%2Fuploads%2F2021%2F02%2Favatarka-dlya-skaypa-dlya-parney.jpg&imgrefurl=https%3A%2F%2Fshapka-youtube.ru%2Favatarka-dlya-skaypa-dlya-parney%2F&tbnid=qZ88p1yH3RMVrM&vet=12ahUKEwil8cin7832AhVL2aQKHbGeBG8QMygAegUIARDVAQ..i&docid=aNE2-BTAWFwTtM&w=800&h=800&q=avatarka&ved=2ahUKEwil8cin7832AhVL2aQKHbGeBG8QMygAegUIARDVAQ' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;
