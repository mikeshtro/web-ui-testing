import 'reveal.js/dist/reveal.css';
import './edhouse.scss';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes'

const deck = new Reveal();

deck.initialize({
  plugins: [RevealNotes]
});