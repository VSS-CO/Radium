import { ByteCard } from '../components/byte-card.ts';

export default async function About() {
  const card = new ByteCard();
  card.innerHTML = '<h2>About Radium</h2><p>This is the about page.</p>';
  return card;
}
