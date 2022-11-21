import Text from "./Component/Text"
import React, { useState } from 'react'

function App() {

  const [edit, setEdit] = useState("Edit");
  const [color, setColor] = useState("");
  const [char, setChar] = useState("12")
  const [space, setSpace] = useState("MonoSpace");
  console.log(edit)

  const HandleEdit = (e) => {
    setEdit(e.target.value);

  }
  const HandleColor = (e) => {
    if (edit === "Edit")
      setColor(e.target.value);

  }
  const HandleChar = (e) => {
    if (edit === "Edit")
    
    setChar(e.target.value);

  }
  const HandleSpace = (e) => {
    if (edit === "Edit")

    setSpace(e.target.value);

  }
  return (
    <>

      <Text char={char}
        color={color}
        space={space}
        HandleChar={HandleChar}
        HandleColor={HandleColor}
        HandleEdit={HandleEdit}
        HandleSpace={HandleSpace} 
        edit={edit}
        />
    </>
  );
}

export default App;
