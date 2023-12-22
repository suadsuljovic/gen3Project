import "./App.css";
import { Button } from "antd";
import { useSelector } from "react-redux";

function App() {
  const blogsState = useSelector((state) => state.blogs);

  console.log(blogsState);
  return (
    <>
      <Button>Text</Button>
    </>
  );
}

export default App;
