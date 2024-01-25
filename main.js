import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './edhouse.scss';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';

const deck = new Reveal();

deck.initialize({
  plugins: [RevealNotes, RevealHighlight]
});