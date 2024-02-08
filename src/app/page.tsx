import EyeCatch from "./Components/topPage/EyeCatch";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loding from "./Components/topPage/Loding";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Loding />
      <Header />
      <main>
        <EyeCatch />
        <Footer />
      </main> 
    </div>
 );
}
