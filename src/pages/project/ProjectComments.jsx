import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { v4 as uuidv4 } from 'uuid'
import { useFirestore } from '../../hooks/useFirestore'

export default function ProjectComments({ project }) {
  const { updateDocument, response } = useFirestore('projects')
  const [newCommment, setNewComment] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newCommment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuidv4(),
    }

    // console.log(commentToAdd)
    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    })
    if (!response.error) {
      setNewComment('')
    }
  }

  return (
    <div className="project-comments" onSubmit={handleSubmit}>
      <h4>Project Comments</h4>
      <form className="add-comment">
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newCommment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  )
}
