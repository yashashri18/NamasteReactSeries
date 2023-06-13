import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const filterList = ["All", "Gaming", "Music", "News", "History", "Cooking","Coding","TedTalks","Comedy","Conversation","Debates","Flim critisms"]

  return (
    <div>
      <div className='flex'>
        {filterList.map((name, index) => (
          <Button key={index} name={name}/>
        ))}
      </div>
    </div>
  )
}

export default ButtonList
