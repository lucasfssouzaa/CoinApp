
function AlertSystem() {

  function show(message, type) {
    const title =
      type === "error" ? "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-dasharray='16' stroke-dashoffset='16' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M7 7l10 10'><animate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='16;0'/></path><path d='M17 7l-10 10'><animate fill='freeze' attributeName='stroke-dashoffset' begin='0.4s' dur='0.4s' values='16;0'/></path></g></svg>" :
      type === "success" ? "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><mask id='SVGkzXYXbbR'><g fill='none' stroke='#fff' stroke-dasharray='24' stroke-dashoffset='24' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M2 13.5l4 4l10.75 -10.75'><animate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='24;0'/></path><path stroke='#000' stroke-width='6' d='M7.5 13.5l4 4l10.75 -10.75'><animate fill='freeze' attributeName='stroke-dashoffset' begin='0.4s' dur='0.4s' values='24;0'/></path><path d='M7.5 13.5l4 4l10.75 -10.75'><animate fill='freeze' attributeName='stroke-dashoffset' begin='0.4s' dur='0.4s' values='24;0'/></path></g></mask><rect width='24' height='24' fill='currentColor' mask='url(#SVGkzXYXbbR)'/></svg>" :
      type === "info" ? "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path stroke-dasharray='64' stroke-dashoffset='64' d='M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z'><animate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='64;0'/></path><path stroke-dasharray='8' stroke-dashoffset='8' d='M12 7v6'><animate fill='freeze' attributeName='stroke-dashoffset' begin='0.6s' dur='0.2s' values='8;0'/></path><path stroke-dasharray='2' stroke-dashoffset='2' d='M12 17v0.01'><animate fill='freeze' attributeName='stroke-dashoffset' begin='0.8s' dur='0.2s' values='2;0'/></path></g></svg>" : "";
  
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


function showConfirmYesNo(texto) {
  const overlay = document.getElementById('confirmOverlayYesNo');
  const messageEl = document.getElementById('confirmMessageYesNo');
  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');

  messageEl.innerHTML = texto;
  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');

  return new Promise((resolve) => {
    function cleanup() {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
      btnYes.removeEventListener('click', onYes);
      btnNo.removeEventListener('click', onNo);
      document.removeEventListener('keydown', onKeyDown);
      overlay.removeEventListener('click', onOverlayClick);
    }

    function onYes() {
      cleanup();
      resolve(true);
    }
    function onNo() {
      cleanup();
      resolve(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        cleanup();
        resolve(false);
      } else if (e.key === 'Enter') {
        cleanup();
        resolve(true);
      }
    }
    function onOverlayClick(e) {
      if (e.target === overlay) {
        cleanup();
        resolve(false);
      }
    }

    btnYes.addEventListener('click', onYes);
    btnNo.addEventListener('click', onNo);
    document.addEventListener('keydown', onKeyDown);
    overlay.addEventListener('click', onOverlayClick);
  });
}

