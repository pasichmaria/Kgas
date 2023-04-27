import React from 'react'
export const HomePage = () => {
  return (
    <>
      <main class="flex-1 bg-indigo-100">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">User is logged in</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
