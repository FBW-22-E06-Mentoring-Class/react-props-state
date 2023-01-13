import React from 'react'

export default function Article({heading, para1,para2}) {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{para1}</p>
        <p>{para2}</p>
    </div>
  )
}
