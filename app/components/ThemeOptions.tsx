'use client';
import React, { useEffect, useState } from 'react'
import { setTheme,getTheme } from '@/app/api-services/commonService';
const ThemeOptions = () => {
    const [currentTheme, setCurrentTheme] = useState('light');

        useEffect(() => {
        const fetchTheme = async () => {
            const theme = await getTheme();
            setCurrentTheme(theme);
        };
        fetchTheme();
    }, []);
    
    const onChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const theme = e.target.value;
        console.log("Selected theme:", theme);  
        setTheme(theme);
        setCurrentTheme(theme);
    }
  return (
    <div>
        <select className="select select-bordered" value={currentTheme} onChange={onChangeTheme}>
           <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cupcake">Cupcake</option>
            <option value="bumblebee">Bumblebee</option>
            <option value="emerald">Emerald</option>
            <option value="corporate">Corporate</option>
            <option value="synthwave">Synthwave</option>
            <option value="retro">Retro</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="valentine">Valentine</option>
            <option value="halloween">Halloween</option>
            <option value="garden">Garden</option>
            <option value="forest">Forest</option>
            <option value="aqua">Aqua</option>
            <option value="lofi">Lofi</option>
            <option value="pastel">Pastel</option>
            <option value="fantasy">Fantasy</option>
            <option value="wireframe">Wireframe</option>
            <option value="black">Black</option>
            <option value="luxury">Luxury</option>
            <option value="dracula">Dracula</option>
            <option value="cmyk">CMYK</option>
            <option value="autumn">Autumn</option>
            <option value="business">Business</option>
            <option value="acid">Acid</option>
            <option value="lemonade">Lemonade</option>
            <option value="night">Night</option>
            <option value="coffee">Coffee</option>
            <option value="winter">Winter</option>
        </select>
    </div>
  )
}

export default ThemeOptions;
