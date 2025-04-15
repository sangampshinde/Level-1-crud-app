import React, { Children } from 'react'

const Layout = () => {
  return (
    <div>
        <div className="min-h-screen bg-base-100">
            <nav className="navbar bg-base-200">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Item Manager</a>
                    </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/items">Items</a></li>
                        <li><a href="/items/create">Create Item</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <main className="container mx-auto p-4">
            {Children}
        </main>
    </div>
  )
}

export default Layout