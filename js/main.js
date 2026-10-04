const dialog = document.getElementById('order-dialog');
const form = document.getElementById('order-form');
const message = document.getElementById('success-message');
const product = document.getElementById('selected-product');

const name = new URLSearchParams(location.search).get('product');
if (name) {
  product.value = name;
  document.getElementById('order-topic').value = 'product';
  document.getElementById('order-comment').value = 'Хочу заказать: ' + name;
}

if (dialog) {
  const buttons = document.querySelectorAll('.product-card__button');
  for (const button of buttons) {
    button.addEventListener('click', function () {
      product.value = button.dataset.product;
      dialog.showModal();
    });
  }
  document.getElementById('close-order-dialog').addEventListener('click', function () {
    dialog.close();
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  message.hidden = false;
  form.reset();
  if (dialog) dialog.close();
});
