import React from "react";

interface ColorPickerProps {
    colors: string[],
    activeColor: string | null,
    setActiveColor: any
}

export default function ColorPicker({colors, activeColor, setActiveColor}: ColorPickerProps) {
    if (!colors.length) return null;
    return (
        <fieldset className="color-picker">
            {
                colors.map((color: string, i: number) => (
                    <label key={i}>
                        <input name={"color"}
                               type="radio"
                               value={color}
                               checked={color === activeColor}
                               onChange={() => setActiveColor(color)}
                        />
                        <span style={{backgroundColor: color}}/>
                    </label>))
            }
        </fieldset>
    )
}