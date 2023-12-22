import { DEFAULT_DOCUMENT_REM_FONT_SIZE } from "#/index";
export const THE_UI_DESIGN_SIZE = 375; // UI设计稿尺寸

//默认支持到4倍设计稿的屏幕都等比缩放
const setRem = () => {
  const MAX_SUPPORT_SCALE = 2;
  const scale = document.documentElement.clientWidth / THE_UI_DESIGN_SIZE;
  const size =
    DEFAULT_DOCUMENT_REM_FONT_SIZE * Math.min(scale, MAX_SUPPORT_SCALE);

  document.documentElement.style.fontSize = `${size}px`;
};

export function remInit() {
  window.onresize = setRem;
  setRem();
}
