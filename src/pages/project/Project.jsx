import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import ProjectSummary from './ProjectSummary'
import './Project.css'
import ProjectComments from './ProjectComments'

function Project() {
  const { id } = useParams()
  const { error, document } = useDocument('projects', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="project-details">
      {/* <h1>{document.name}</h1> */}
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  )
}

export default Project
