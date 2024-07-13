import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useCurrentUser();
  console.log(data);

  async function handleClick() {
    try {
      await signIn("credentials", {
        email: "fallou@gmail.com",
        password: "123456",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main>
      <p>lorem5</p>
      {!data && <button onClick={handleClick}>S'inscrire</button>}
      {data && <button onClick={() => signOut()}>Logout</button>}
    </main>
  );
}
