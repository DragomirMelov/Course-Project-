import React from 'react'

const Comment = (props) => {
  return (
    <>
    <div className="mono-comment-card">
      <div className="mono-comment-header">
        <span style={{color: "#ffffff" }}>{props.data}</span>
      </div>
      <p className="mono-comment-text">
      {props.text}
      </p>
    </div>
    </>
  )
}

export default Comment