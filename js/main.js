
function AlertSystem() {
  const styles = `
    .overlay-alert {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .alert-box {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      min-width: 250px;
      text-align: center;
      z-index: 101;
      font-family: Arial, sans-serif;
    }
    .error { border: 2px solid #e74c3c; color: #e74c3c; }
    .success { border: 2px solid #2ecc71; color: #2ecc71; }
    .info { border: 2px solid #3498db; color: #3498db; }
  `;

  if (!document.getElementById("alert-styles")) {
    const styleTag = document.createElement("style");
    styleTag.id = "alert-styles";
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
  }

  function show(message, type) {
    const overlay = document.createElement("div");
    overlay.className = "overlay-alert";

    const alertBox = document.createElement("div");
    alertBox.className = `alert-box ${type}`;
    alertBox.textContent = message;

    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  }

  return {
    Error: (msg) => show(msg, "error"),
    Success: (msg) => show(msg, "success"),
    Info: (msg) => show(msg, "info"),
  };
}

// Exemplo de uso:
const Alert = AlertSystem();

function AlertError(msg) {
  Alert.Error(msg);
}
function AlertSuccess(msg) {
  Alert.Success(msg);
}
function AlertInfo(msg) {
  Alert.Info(msg);
}