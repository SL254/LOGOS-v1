// snapdom-renderer.js 파일의 전체 내용을 아래 코드로 교체하세요.

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("game-iframe");
  const visualCanvas = document.getElementById("visual-canvas");
  const ctx = visualCanvas.getContext("2d");

  let gameWindow; // Iframe의 window 객체
  let gameDocument;
  let gameContainer;
  let animationFrameId = null;

  iframe.onload = () => {
    gameWindow = iframe.contentWindow;
    gameDocument = iframe.contentDocument || gameWindow.document;
    gameContainer = gameDocument.body;

    if (!gameContainer || typeof gameWindow.captureMyself !== "function") {
      console.error("Iframe content or captureMyself function not available.");
      return;
    }

    // 초기 화면 캡처
    updateVisuals();

    const observer = new MutationObserver(debounceUpdateVisuals);
    observer.observe(gameContainer, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
      attributeFilter: ["class", "style"],
    });

    gameContainer.addEventListener("transitionstart", startCaptureLoop);
    gameContainer.addEventListener("transitionend", () => {
      stopCaptureLoop();
      updateVisuals();
    });

    // 호버 처리는 이제 iframe 내부에서 CSS :hover가 직접 동작하므로
    // 복잡한 자바스크립트 로직이 더 이상 필요 없습니다.
    // 따라서 mousemove 이벤트 리스너는 제거합니다.
  };

  const updateVisuals = async () => {
    if (!gameWindow || typeof gameWindow.captureMyself !== "function") return;

    try {
      // ★★★ 핵심 변경점 ★★★
      // iframe 내부의 captureMyself 함수를 호출하여 캡처 결과를 받아옵니다.
      const capturedCanvas = await gameWindow.captureMyself();

      if (capturedCanvas) {
        ctx.clearRect(0, 0, visualCanvas.width, visualCanvas.height);
        ctx.drawImage(capturedCanvas, 0, 0);
      }
    } catch (error) {
      console.error("Failed to get capture from iframe:", error);
    }
  };

  let debounceTimer;
  const debounceUpdateVisuals = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateVisuals, 16);
  };

  const captureLoop = () => {
    updateVisuals();
    animationFrameId = requestAnimationFrame(captureLoop);
  };

  function startCaptureLoop() {
    if (!animationFrameId) captureLoop();
  }

  function stopCaptureLoop() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }
});
