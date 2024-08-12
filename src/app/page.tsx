import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
     <div>This is Home Page</div>
     <div >
     <Link href = "/name" > Name</Link>
     </div>
    </main>
  );
}
