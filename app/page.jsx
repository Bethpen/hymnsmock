import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div>
          <Link href="/crud">
            Crud
          </Link>
      </div>
      <div>
        Home Page
      </div>
    </div>
  )
}

export default Homepage