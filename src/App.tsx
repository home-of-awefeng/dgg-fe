import { FC } from "react";
import store from "@/store";
import { RouterAuth } from "@/routes";
import routes from "@/routes/config";
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "zarm";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import "zarm/dist/zarm.css";

const App: FC = () => {
  const { role } = store.getState().user;

  console.log("当前用户角色", role);
  // const curRoutes = useMemo(() => {
  //   return screenRoutesByRole(cloneDeep(routes));
  // }, []);
  const Element = useRoutes(routes);
  return (
    <RouterAuth>
      <ConfigProvider locale={zhCN}>{Element}</ConfigProvider>{" "}
    </RouterAuth>
  );
};

export default App;
