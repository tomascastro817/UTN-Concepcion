import React from 'react'
import { FacebookProvider, Page } from "react-facebook";

const AppFacebook = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-4">
            <FacebookProvider appId="133061186450355">
            <Page
                href="https://www.facebook.com/profile.php?id=100063607237824"
                tabs="timeline"
            />
            </FacebookProvider>
        </div>
    </div>
  )
}

export default AppFacebook