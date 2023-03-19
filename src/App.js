import { Button } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, selectToken, updateToken } from "./store/slice/token";
import GetToken from "./function/GetToken";
import StoreData from "./function/StoreData";
import SubmitData from "./function/Submit";
import "./App.css";
import "rsuite/dist/rsuite.min.css";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleGetToken = async () => {
    const t = await GetToken();
    await dispatch(updateToken(t));
  };

  const handleRemoveToken = async () => {
    const t = await SubmitData(token); // Remove token
    await dispatch(removeToken(t)); // return data should be null
  };

  console.log(token);

  return (
    <div className="App">
      <Button
        onClick={() => {
          token ? handleRemoveToken() : handleGetToken();
        }}
      >
        {token ? "Remove token" : "Get Token"}
      </Button>
      <p>current Token: {token}</p>
      {token && <Button onClick={() => StoreData(token)}>Send Data</Button>}
    </div>
  );
}

export default App;
