const modalCloseBtn = document.querySelector('.modal-close-btn');
const formSubmitBtn = document.querySelector('#ign-submit');
const logoutBtn = document.querySelector('#logout');
const modal = document.querySelector('.modal');
const formGroup = document.querySelector('.form-group');
const progress = document.querySelector('.progress');
const avatar = document.querySelector('.avatar');
const ignEl = document.querySelectorAll('.ign');
const paddleCheckoutCloseBtn = document.querySelector('.paddle-checkout');
const btn = document.querySelector('.premium-btn');
const checkoutContainer = document.querySelector('.checkout-container');
const errorEl = document.querySelector('.error');

function getCookie(cname) {
  let cookieName = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArr = decodedCookie.split(';');

  for(let i = 0; i <cookieArr.length; i++) {
    let cookie = cookieArr[i];

    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return '';
}

function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays*24*60*60*1000));
  let expires = 'expires='+ date.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

function toogleModal() {
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
  } else {
    modal.classList.add('active');
  }
}

function toogleProgress() {
  if (formGroup.classList.contains('active')) {
    formGroup.classList.remove('active');
    progress.classList.add('active');
  } else {
    formGroup.classList.add('active');
    progress.classList.remove('active');
  }
}

function handleLogin(ign) {
  fetch('https://api.ashcon.app/mojang/v2/user/' + ign)
    .then(async response => {
      const data = await response.json();
      const uuid = data.uuid.replace(/\-/g, '');
      const username = data.username;
      setCookie('uuid', uuid, 60);
      setCookie('ign', username, 60)
      window.location.href = '/store.html';

      if (!response.ok) {
        toogleProgress();
        if (data.code == 404) {
          errorEl.innerHTML = 'Username not found!';
        }
        if (data.code == 429) {
          errorEl.innerHTML = 'Please try in a bit!';
        }
      }
    })
    .catch(err => console.log(err));
}

function handleLogout() {
  deleteCookie('ign');
  deleteCookie('uuid');
}

function getUrlParams(query) {
  let url = window.location.search.substring(1);
  let paramArr = url.split('=');

  return paramArr[1];
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    toogleModal();
  });
}

if (formSubmitBtn) {
  formSubmitBtn.addEventListener('click', e => {
    e.preventDefault();
    toogleProgress();
    document.body.style.cursor = 'progress';
    const ignInput = document.querySelector('input[name="ign"]').value;
    
    handleLogin(ignInput);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    handleLogout();
    window.location.href = '/';
  });
}

if ((avatar && ignEl) && getCookie('uuid') != 0) {
  avatar.src = 'https://crafatar.com/avatars/' + getCookie('uuid') + '?size=64&default=MHF_Steve&overlay';
  ignEl.forEach(el => {
    el.innerHTML = getCookie('ign');
  });
}

if (window.location.pathname == '/store' && getCookie('uuid').length == 0) {
  toogleModal();
}

if (getUrlParams('ign')) {
  handleLogin(getUrlParams('ign'));
}

// Paddle config
if (window.location.pathname == '/store') {
  Paddle.Environment.set('sandbox');
  Paddle.Setup({ vendor: 9416 });
  
  if (btn) {
    btn.addEventListener('click', () => {
      Paddle.Checkout.open({
        product: 40992,
        passthrough: JSON.stringify({
          "uuid": getCookie('uuid'),
          // "rewardful": { referral: referral }
        })
      })
      // checkoutContainer.classList.add('active');
      // Paddle.Checkout.open({
      //   method: 'inline',
      //   product: 40992,
      //   passthrough: '{"uuid": ' + getCookie('uuid') + '}',
      //   allowQuantity: true,
      //   disableLogout: true,
      //   frameTarget: 'paddle-checkout',
      //   frameInitialHeight: 416,
      //   frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;'
      // });
    });
  }
}