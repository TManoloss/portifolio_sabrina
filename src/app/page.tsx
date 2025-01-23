import TopBar from "./components/TopBar/page";
import Body from "./components/Body/page"

export default function Home() {
  return (
    <>
    <div className="font-fonteLogo text-4xl text-black m-4">
      <TopBar/>
      <Body/>
    </div>
    </>
  );
}
