import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {Line, LineChart, XAxis, YAxis} from "recharts";

export default function Home() {
  return (
    <div className="min-h-screen py-5 bg-tokyo-900">
      <LiveTransactionStats />
    </div>
  );
}

const LiveTransactionStats = () => {
  const [data, setData] = useState(
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    .map( _ => { 
      return {name: '', uv: Math.floor(Math.random() * 1000)}
     }
    ))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center w-full max-w-6xl p-5 mx-auto rounded-lg shadow-md pb-9 bg-tokyo-800 shadow-tokyo-900">
      <h1 className="pb-5 pl-1 text-left text-gray-200">Live Transaction Stats</h1>
      <LineChart className="pt-2 mx-auto" width={900} height={300} data={data}>
        <YAxis />
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </motion.div>
  )
}
