import React from "react";
import Greetings from "./Greetings";

type PropsApp = {
  
};

// https://velog.io/@velopert/create-typescript-react-component
function App ({}:PropsApp) {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
