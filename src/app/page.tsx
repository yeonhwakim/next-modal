import Link from "next/link";
import UseStateHook from "./_component/UseStateHook";

export default function Home() {
  return (
    <>
      <h3>MODAL</h3>
      <UseStateHook />
      <Link href="/ContextApiParent1">ContextApiParent1</Link>
      <br />
      <Link href="/ContextApiParent2">ContextApiParent2</Link>
      <br />
      <Link href="/ZustandLibParent1">ZustandParent1</Link>
      <br />
      <Link href="/ZustandLibParent2">ZustandParent2</Link>
    </>
  );
}
