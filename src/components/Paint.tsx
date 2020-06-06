import React, {useEffect, useState} from "react";
import randomColor from "./randomcolor";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import WindowSize from "./WindowSize";

export default function Paint() {
    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null);

    useEffect(() => {
        const getColors = () => {
            const baseColor = randomColor();
            fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
                .then(res => res.json())
                .then(res => {
                    setColors(res.colors.map((color: {hex: {value: string}}) => color.hex.value));
                    setActiveColor(res.colors[0].hex.value);
                })
        };
        getColors();
    }, []);


    return (
        <header style={{borderTop: `10px solid ${activeColor}`}}>
            <div className={"app"}>
                <Name/>
            </div>
            <div style={{marginTop: 10}}>
                <ColorPicker
                    colors={colors}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                />
            </div>
            <WindowSize/>
        </header>
    )
}
