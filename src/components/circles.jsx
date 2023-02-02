 import React, { useState } from 'react'
import useInterval from 'react-useinterval'
//  import d3 from 'd3'
const Circles = () => {
    const generateDataset = () => (
        Array(10).fill(0).map(() => ([
          Math.random() * 80 + 10,
          Math.random() * 35 + 10,
        ]))
      )
    const [dataset, setDataset] = useState(
      generateDataset()
    )
  
    useInterval(() => {
      const newDataset = generateDataset()
      setDataset(newDataset)
    }, 2000)
  
    return (
      <svg viewBox="0 0 100 50">
        {dataset.map(([x, y], i) => (
          <circle
            cx={x}
            cy={y}
            r="3"
          />
          
        ))}
        {/* <line x1="0" y1="0" x2="10" y2="10" stroke="black"></line> */}
        {/* <rect x="0" y="0" width="10" height="10"></rect> */}
        {/* <circle cx="5" cy="5" r="5"></circle> */}
        {/* <ellipse cx="10" cy="5" rx="10" ry="5"></ellipse> */}
        {/* <polygon points="0,0 10,5 20,0 20,20 10,15 0,20"></polygon> */}
        {/* <polyline points="0,0 10,5 20,0 20,20 10,15 0,20" stroke="black"></polyline> */}
        {/* <path d="M65,10 a50,25 0 1,0 50,25"></path> */}
      </svg>
    )
  }
 
 export default Circles
 