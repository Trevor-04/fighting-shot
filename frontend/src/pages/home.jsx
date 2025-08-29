import LavenderRibbon from "../assets/Lavender.gif"
import {ThumbUpIcon as ThumbUpOutline, ThumbDownIcon as ThumbDownOutline, ChatIcon } from '@heroicons/react/outline'
import {ThumbUpIcon as ThumbUpSolid, ThumbDownIcon as ThumbDownSolid} from '@heroicons/react/solid'
import { useState } from 'react'

const Home = () => {

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked && isDisliked) {
      setIsDisliked(false);
    }
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (!isDisliked && isLiked) {
      setIsLiked(false);
    }
  };

  return (
    <div className='relative grid grid-auto-cols grid-flow col bg-primary items-center 
    justify-center text-accent p-5 font-bold h-full max-h-screen overflow-y-auto '>
      
      <div className="flex items-center bg-secondary w-[540px] max-w-[740px] h-[440px] max-h-[540px] my-1 rounded-md">
        <img src={LavenderRibbon} alt="lavender" className="flex items-center w-40 h-40"></img>
      
        <button 
          className="absolute left-20 bottom-36 size-6 m-3 cursor-pointer hover:scale-110 transition-transform"
          onClick={handleLike}
        >
          {isLiked ? (
            <ThumbUpSolid className="text-green-500" />
          ) : (
            <ThumbUpOutline className="hover:text-green-400" />
          )}
        </button>

        <button 
          className="absolute left-28 bottom-36 size-6 m-3 cursor-pointer hover:scale-110 transition-transform"
          onClick={handleDislike}
        >
          {isDisliked ? (
            <ThumbDownSolid className="text-red-500" />
          ) : (
            <ThumbDownOutline className="hover:text-red-400" />
          )}
        </button>
        
        <button className="absolute left-40 bottom-36 size-6 m-3 cursor-pointer hover:scale-110 transition-transform">
          <ChatIcon/>
        </button>
      </div>
      <hr className="w-full text-accent-50 h-2"></hr>
    </div>
  );
}

export default Home;