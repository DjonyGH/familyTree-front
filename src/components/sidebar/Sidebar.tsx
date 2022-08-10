import React, { useState } from 'react'
import style from './sidebar.module.scss'

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <div className={`${style.sidebar} ${isExpanded ? style.expanded : ''}`}>
      <button className={style.expandBtn} onClick={() => setIsExpanded((prev) => !prev)}>
        +
      </button>
    </div>
  )
}
