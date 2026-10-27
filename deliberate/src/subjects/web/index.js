import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'web',
  title: 'Web Development',
  short: 'Web',
  tagline: 'How the web really works: from typing a URL to a page on screen, frontend to backend, and why frameworks exist.',
  color: { light: '#0e7490', dark: '#22d3ee' },
  units: unitsFrom(lessons),
  drills,
}
