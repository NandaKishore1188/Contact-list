document
  .querySelector('#btn-add-contact')
  .addEventListener('click', function () {
    const nameInput = document.querySelector('#name-input');
    addContact(nameInput.value);
    nameInput.value = '';
  });

function addContact(fullName) {
    if(!fullName || !fullName.trim()) return;

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-entry';

    contactDiv.addEventListener('dblclick', function() {
        contactDiv.remove();
    });

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent = fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();

    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textContent = fullName;

    // append in order
    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contacts-list').append(contactDiv);
}

function randomColor() {
    const colors = [
        '#05f661',
        '#020024',
        '#00d4ff',
        '#fdbb2d',
        '#22c1c3',
        '#6222c3',
        '#c32222',
        '#fd1d1d',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}