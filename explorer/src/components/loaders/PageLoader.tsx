import {useEffect, useState} from "react"

export default function PageLoader() {

  
  const [height, setHeight] = useState(72)

  useEffect(() => {

    // @ts-ignore
    const height = document.querySelector(".w-full.py-6.bg-tokyo-800").offsetHeight
    setHeight(height)
  }, [])

  return (
    <div className="flex items-center justify-center bg-tokyo-900" style={{
      height: `calc(100vh - ${height}px)`,
      }}>
      <h1 className="text-2xl text-gray-200">Loading for a better experience...</h1>
    </div>
  )
}
