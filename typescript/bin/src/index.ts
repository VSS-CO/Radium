import { router } from './framework/router.js';
import { createInspector } from './framework/inspector.js';
import { ByteCard } from './utils/dom.js';
import { ByteButton } from './utils/dom.js';
import { ByteModal } from './utils/dom.js';

const app = document.getElementById('app');
const inspector = createInspector();

if (app) {
  const card = new ByteCard();
  card.innerHTML = '<h1>Hello Radium</h1>';

  const button = new ByteButton();
  button.setAttribute('label', 'Open Modal');
  button.addEventListener('click', () => {
    const modal = new ByteModal();
    modal.innerHTML = '<p>This is a modal</p>';
    document.body.appendChild(modal);
    inspector.log('Modal opened');
  });

  card.appendChild(button);
  app.appendChild(card);
  inspector.log('App initialized');
}

// Setup router (optional)
router.init(app!);
