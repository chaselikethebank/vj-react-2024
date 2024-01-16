import React, { useState } from 'react'

const Sidbar = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>#veryjazzed</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Indie is a lifestyle, not a genre
Mattew Ellis
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default Sidbar
