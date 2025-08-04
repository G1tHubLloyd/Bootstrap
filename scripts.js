document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  const input = document.getElementById('achievement-input');
  const list = document.getElementById('achievement-list');
  const modalBody = document.getElementById('modal-body-content');

  addButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== '') {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

      const span = document.createElement('span');
      span.textContent = text;

      const button = document.createElement('button');
      button.textContent = 'View';
      button.classList.add('btn', 'btn-primary', 'btn-sm');
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', '#achievementModal');

      button.addEventListener('click', () => {
        modalBody.textContent = text;
      });

      li.appendChild(span);
      li.appendChild(button);
      list.appendChild(li);

      input.value = '';
    }
  });
});
