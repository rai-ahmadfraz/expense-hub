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
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
            <option value='cupcake'>Cupcake</option>
            <option value='winter'>Winter</option>
        </select>
    </div>
  )
}

export default ThemeOptions;
