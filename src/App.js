import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, updateToken } from "./store/slice/token";
import GetToken from "./function/GetToken";
import StoreData from "./function/StoreData";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleGetToken = async () => {
    const t = await GetToken();
    await dispatch(updateToken(t));
  };

  console.log(token);

  function render() {
    if (token.length !== 0) {
      return <Button onClick={() => StoreData(token)}>Send Data</Button>;
    }
  }
  return (
    <div className="App">
      <Button onClick={handleGetToken}>Get Token</Button>
      <p>current Token: {token ? token : "null"}</p>
      {render()}
    </div>
  );
}

export default App;
