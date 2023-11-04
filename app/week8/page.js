"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
 

export default function Page() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

function handleSignIn(){
     gitHubSignIn();
}

function handleSignOut(){
     firebaseSignOut();
}

 return(
    <div>
        {!user && <button onClick={handleSignIn}>Sign In with GitHub</button>}
        {user && (
        <div>
            <p>
            Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut}>Sign Out</button>
            <br/>
            <Link href="week8/shopping-list">Shopping List</Link>
        </div>
        )}
  </div>
)}