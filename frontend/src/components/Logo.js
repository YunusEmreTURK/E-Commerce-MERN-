import React from 'react'

const Logo = ({w,h}) => {
  return (
    <svg
    width={w}
    height={h}
    viewBox="0 0 200 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="10"
      y="35"
      font-family="Arial"
      font-size="24"
      fill="#000"
    >
      Trend
    </text>
    <polygon
      points="140,10 145,30 130,20 150,20 135,30"
      fill="gold"
      stroke="black"
      strokeWidth="1"
    />
  </svg>
  )
}

export default Logo
