import TopBar from "./components/TopBar/page";
import Body from "./components/Body/page"

export default function Home() {
  return (
    <>
    <div className="pad-0 font-fonteLogo text-4xl text-black m-0">
      <div className="p-2">
        <TopBar/>
      </div>
      <div className="pad-0">
        <Body/>
      </div>
    </div>
    </>
  );
}
