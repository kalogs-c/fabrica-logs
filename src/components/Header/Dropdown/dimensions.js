import { useLayoutEffect, useState, useCallback } from 'react'

const getDimentions = element => element.getBoundingClientRect() 

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState(null)
  const [element, setElement] = useState(null)

  const hook = useCallback(e => setElement(e), [])

  useLayoutEffect(() => {
    if (element) {
      const updateDimentions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimentions(element))
        })
      }

      updateDimentions();

      if (responsive) {
        addEventListener('resize', updateDimentions)

        return () => {
          window.removeEventListener('resize', updateDimentions)
        }
      }
    }
  }, [element, hook, responsive])

  return [hook, dimensions, element]
}