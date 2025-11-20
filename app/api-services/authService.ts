"use server"; 

import { cookies } from "next/headers";
import { redirect  } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData{
  email:string,
  password:string,
  name:string
}

export const login = async (formData:any) => {
    
   const requestData = Object.fromEntries(formData.entries()) as LoginFormData;
   const {email,password} = requestData;

  const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        // expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    });

  const loginUser = await res.json();

  if (loginUser.accessToken) {
    const cookieStore = await cookies();

    cookieStore.set("token", loginUser.accessToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    cookieStore.set(
      "login-user",
      JSON.stringify(loginUser),
      {
        httpOnly: true,
        secure: true,
        path: "/",
      }
    );

    redirect("/dashboard");
  } else {
    console.log("invalid email or password");
  }
}


export const registerUser = async (formData:any) => {
    
   const requestData = Object.fromEntries(formData.entries()) as RegisterFormData;
   const {name,email,password} = requestData;
  //  throw new Error("Username and password are required");

  const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        // expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    });

  const loginUser = await res.json();
  if(loginUser.accessToken){

       const cookieStore = await cookies();
       cookieStore.set("token",loginUser.accessToken,{
        httpOnly:true,
        secure:true,
        path:"/"
       });
    redirect('/dashboard');
  }else{
    console.log('invalid email or password');
  }
}


export const logout = async () => {
  (await cookies()).delete("token");
  redirect("/login");
}