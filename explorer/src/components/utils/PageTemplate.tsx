import {ReactChild} from "react"

const PageTemplate = ({ children, className="" }:{children:ReactChild, className?: string}) => {
  return (
    <div className={`min-h-screen py-5 bg-tokyo-900 ${ className }`}>
      {
        children
      }
    </div>
  )
}

export default PageTemplate
