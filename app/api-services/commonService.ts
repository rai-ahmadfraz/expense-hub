"use server"; 

import { cookies } from "next/headers";


export const setTheme = async (themeColor: string) => {
    const cookieStore = await cookies();
    cookieStore.set("theme", themeColor, {
      httpOnly: false,
      secure: true,
    });
}

export const getTheme = async () => {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value || 'light';
    return theme;
}