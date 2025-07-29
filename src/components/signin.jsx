import { SignIn } from '@clerk/clerk-react'

const Signin = () => <SignIn appearance={{baseTheme: 'light',
        elements: {
                rootBox: 'flex items-center justify-center h-screen mx-auto',
        },

}}/>

export default Signin