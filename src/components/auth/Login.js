import {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect()
  }, [])

  return <> </>;  
  //<button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;