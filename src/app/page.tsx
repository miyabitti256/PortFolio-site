import EyeCatch from "./Components/topPage/EyeCatch";
import Header from "./Components/Header";
import Loding from "./Components/topPage/Loding";

export default function Home() {
  return (
    <>
      <Loding />
      <Header />
      <main>
        <EyeCatch />
      </main> 
    </>
 );
}
