"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Todo: remove after testing
const expectedEmail = "apex@security.ai";
const expectedPassword = "Admin@123";
export default function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleSubmit() {
    if (
      email === expectedEmail &&
      password === expectedPassword
    ) {
      localStorage.setItem("user", JSON.stringify({ token: "sdf" }));
      router.push("/dashboard");
    } else {
      setError("Incorrect email or password");
    }
  }

  return {
    setEmail,
    setPassword,
    handleSubmit,
    error,
    setError,
  };
}
