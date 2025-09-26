import "./App.css";
import ButtonDemo from "./demo/ButtonDemo";
import IconButton from "./demo/IconButton";

function App() {
  return (
    <div className="flex flex-col justify-start items-center mt-8 h-dvh">
      <ButtonDemo />
      {/* <ButtonGroupDemo /> */}
      <IconButton />
    </div>
  );
}

export default App;
