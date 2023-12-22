import { FC, Fragment } from "react";
import styles from "./index.module.less";
import { Link, Outlet, useNavigate } from "react-router-dom";

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
        <Link to="/settings">设置</Link> |{" "}
        <Link to="/user-center">用户中心</Link> |
        <Link to="/key-test">测试页</Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Welcome;
