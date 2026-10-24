import React, { useState } from 'react'

const CreateComment = ({submitHandlerCreateComment}) => {



  return (
    <div className="monochrome-form-container">
      <form onSubmit={submitHandlerCreateComment}>
        <textarea
            name="text"
          className="monochrome-textarea"
          placeholder="Write a comment..."
          required
        />
        <button type="submit" className="monochrome-button">
          Post Comment
        </button>
      </form>
      </div>
  )
}

export default CreateComment