import { useState } from "react";

export default function Home() {
  let [clickCount, setClickCount] = useState<number>(0)

  const handleOnClick = () => {
    setClickCount((counter) => {
      return counter += 1
    })
  }

  return (
    <div>
      <button onClick={handleOnClick}>CLICK MEEEEEE</button>
      <p>Button has been clicked { clickCount } times.</p>
    </div>
  );
}
