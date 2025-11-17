import { Counter } from "@/app/counter";

export default function Home() {
  return (
    <div>
      <h1>Home</h1> //?server componen (karena tidak ada layout / static)
      <Counter /> //?client componen (karena ada layout/abstract / dinamis)
    </div>
  );
}