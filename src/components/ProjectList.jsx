import './ProjectList.css'

import React from 'react'

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.lenght === 0 && <p>No Projects yet!</p>}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  )
}
