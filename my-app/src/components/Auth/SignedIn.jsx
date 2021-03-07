import React from 'react'
import { useContext } from "react";
import { SemContext } from "../../SemContext";


const Profile = React.lazy(() => import('./Profile'));
const LoginSign = React.lazy(() => import('./LoginSign'));


const SignedIn = () => {
    const [authInfo, setAuthInfo] = useContext(SemContext);

  
    const isLoggedIn = authInfo.isLoggedIn;
    let Page;
    if (isLoggedIn) {
      Page = <Profile/> ;
    } else {
      Page = <LoginSign/> ;
    }

    return (
      <div>
          <Suspense fallback={<Spinner />}>
          {Page}
</Suspense>
      
      </div>
    )
}

export default SignedIn
