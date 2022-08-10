import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px',
    // triggerOnce: true,
  })

  return (
    <div className={inView ? 'fade-in' : 'invisible'} ref={ref}>
      {children}
    </div>
  )
}
