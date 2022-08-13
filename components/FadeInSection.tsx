import React from 'react'
import { useInView } from 'react-intersection-observer'

export const FadeInSection: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px',
    triggerOnce: true,
  })

  return (
    <div className={`${className} ${inView ? 'fade-in' : 'invisible'}`} ref={ref}>
      {children}
    </div>
  )
}
