import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import styles from "@/app.module.less";
function App() {
  return (
    <>
      <div className={styles.app}>
        public 和 src assets文件夹资源测试
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className={`bg-red-400 ${styles.card}`}>
        Tailwind css和 css module测试
      </div>
    </>
  );
}

export default App;
