import { useEffect } from "react";
import { asyncGetUser } from "./store/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(asyncGetUser());
  }, []);

  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
