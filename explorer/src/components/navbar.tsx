import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-tokyo-800">
      <div className="flex justify-between max-w-6xl mx-auto">
        <Link to="/" className="font-mono font-bold text-gray-300">Pickfordchain</Link>

        <div>
          <Link className="px-4 py-2 font-light rounded-lg shadow-md hover:text-gray-200 hover:shadow-accent-hover/50 bg-accent hover:bg-accent-hover transition-all" to="/wallet">
             Wallet 
          </Link>
        </div>

      </div>
    </nav>
  )
}
