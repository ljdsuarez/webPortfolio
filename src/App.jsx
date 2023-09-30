import "./App.css";
import TitleName from "./components/title/titleName/TitleName";
import TitleContent from "./components/title/TitleContent/TitleContent";
import SubTitleContent from "./components/title/subTitleContent/subTitleContent";
import SubTitleName from "./components/title/subTitleContent/SubTitleName/SubTitleName";
import Page1 from "./pages/Page1";
import Background from "./components/title/Background/Background";
import Page2 from "./pages/Page2";

function App() {
  return (
    <>
      <Page1>
        <TitleContent>
          <Background />
          <TitleName className="laurenz" name="laurenz" />
          <SubTitleContent>
            <SubTitleName name="designer" className="designer" />
            <SubTitleName name="content creator" className="contentCreator" />
          </SubTitleContent>
          <TitleName className="julian" name="julian" />
        </TitleContent>
      </Page1>
      <Page2></Page2>
    </>
  );
}

export default App;
