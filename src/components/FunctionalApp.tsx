import React, { useState } from "react";

interface AppProps {
  title: string;
}

const App = (props: AppProps) => {
  const [ title, setTitle ] = useState("Well, this is initial state of title");

  const updateTitle = (event: any) => {
    setTitle(event.target.value);
  }

  return (
    <>
      <h1 ref-data={props.title}>{props.title}</h1>
      <h2>This is title - {title}</h2>
      <input type="text" onInput={updateTitle} />
    </>
  )
}

