import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface LikeProps {
    color: string,
    size: number,
}

export const Like = ({color, size} : LikeProps) => {
    const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setIsLiked(status => !status)
    }
  return (
    isLiked ? <AiFillHeart onClick={handleClick} color={color} size={size}/> : <AiOutlineHeart onClick={handleClick} color={color} size={size} />
  )
}
