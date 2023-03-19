import { Button } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, selectToken, updateToken } from "./store/slice/token";
import GetToken from "./function/GetToken";
import StoreData from "./function/StoreData";
import SubmitData from "./function/Submit";
import FormB1_1 from './function/FormB1_1';
import FormB1_2 from './function/FormB1_2';
import FormB2_1 from './function/FormB2_1';
import FormB2_2 from './function/FormB2_2';
import FormB2_3 from './function/FormB2_3';
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

      <h1>KPI 報告</h1>
      <h2>B1.1</h2>
      <FormB1_1 />
      <h2>B1.2</h2>
      <FormB1_2 />
      <h2>B2.1</h2>
      <FormB2_1 />
      <h2>B2.2</h2>
      <FormB2_2 />
      <h2>B2.3</h2>
      <FormB2_3 />
    </div>
  );
}

export default App;
