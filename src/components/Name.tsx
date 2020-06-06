import React, {useState} from "react";

function Name() {
    const [name, setName] = useState("");

    return (
        <input value={name}
               onChange={(e) => setName(e.target.value)}
               onClick={(e) => (e.target as HTMLInputElement).setSelectionRange(0, (e.target as HTMLInputElement).value.length)}
               placeholder={"Untitled"}
        />
    )
}

export default Name;