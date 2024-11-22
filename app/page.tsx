import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <CountdownTimer />
    </div>
  );
}
