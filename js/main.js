
function AlertSystem() {

  function show(message, type) {
    const title =
      type === "error" ? "Erro" :
      type === "success" ? "Sucesso" : "Info";
  
    const html = `
      <div class="overlay-alert">
        <div class="alert-box ${type}">
          <div class="alert-header">${title}</div>
          <div class="alert-message">${message}</div>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML("beforeend", html);
  
    const overlay = document.querySelector(".overlay-alert:last-child");
    overlay.addEventListener("click", () => overlay.remove());
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

function showConfirm(texto) {
  const overlay = document.getElementById('confirmOverlay');
  const messageEl = document.getElementById('confirmMessage');
  const btnOk = document.getElementById('btnOk');
  const btnCancel = document.getElementById('btnCancel');

  messageEl.innerHTML = texto;
  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');

  return new Promise((resolve) => {
    // handlers
    function cleanup() {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
      btnOk.removeEventListener('click', onOk);
      btnCancel.removeEventListener('click', onCancel);
      document.removeEventListener('keydown', onKeyDown);
      overlay.removeEventListener('click', onOverlayClick);
    }

    function onOk() {
      cleanup();
      resolve(true);
    }
    function onCancel() {
      cleanup();
      resolve(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        cleanup();
        resolve(false);
      } else if (e.key === 'Enter') {
        // se o foco estiver dentro do modal, trata como OK
        // aqui simplificamos: Enter = OK
        cleanup();
        resolve(true);
      }
    }
    function onOverlayClick(e) {
      // se clicou exatamente no backdrop (fora da caixa), cancela
      if (e.target === overlay) {
        cleanup();
        resolve(false);
      }
    }

    // ligar eventos
    btnOk.addEventListener('click', onOk);
    btnCancel.addEventListener('click', onCancel);
    document.addEventListener('keydown', onKeyDown);
    overlay.addEventListener('click', onOverlayClick);
  });
}
