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

  const res = await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        // expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., access_token) in the request
    });
  const loginUser = await res.json();
  if (loginUser.access_token) {
    const cookieStore = await cookies();

    cookieStore.set("token", loginUser.access_token, {
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
    throw new Error("Invalid email or password");
  }
}


export const registerUser = async (formData:any) => {
    
   const requestData = Object.fromEntries(formData.entries()) as RegisterFormData;
  const res = await fetch(`${process.env.API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

  const registeredUser = await res.json();
  if(registeredUser.id){
    redirect('/login');
  }else{
    throw new Error("Something went wrong during registration");
  }
}


export const logout = async () => {
  (await cookies()).delete("token");
  redirect("/login");
}