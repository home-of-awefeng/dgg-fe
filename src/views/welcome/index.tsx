import { FC, Fragment } from "react";
import styles from "./index.module.less";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "zarm";
const Welcome: FC = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={styles.welcome}>欢迎</div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingTop: "1rem",
        }}
      >
        <button
          onClick={() => {
            navigate("/settings");
          }}
        >
          测试router
        </button>
        <Button theme="danger">测试组件库</Button>
        <Link to="/settings" className="bg-black w-1/2 block">
          设置
        </Link>{" "}
        |{" "}
        <Link to="/user-center" className="bg-black">
          用户中心
        </Link>{" "}
        |
        <Link to="/key-test" className="bg-black">
          测试页
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Welcome;
