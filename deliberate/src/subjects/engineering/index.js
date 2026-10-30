import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { sections } from './on-the-job/index.js'
import { drills } from './drills.js'
import { lessons as structure, drills as structureDrills } from './structure.js'
import { lessons as databases, drills as databaseDrills } from './databases.js'

// Core units in teaching order; extra units live in their own files.
const unitOrder = ['Craft', 'Structuring code', 'Foundations', 'Systems', 'Databases in depth', 'Collaboration']
const coreUnits = unitsFrom([...lessons, ...structure, ...databases]).sort(
  (a, b) => unitOrder.indexOf(a.title) - unitOrder.indexOf(b.title),
)

export default {
  id: 'engineering',
  title: 'Software Engineering',
  short: 'Engineering',
  tagline: 'Write code that is correct, readable, and easy to change, and run it well in production.',
  color: { light: '#3056d3', dark: '#7c9bff' },
  units: [
    ...coreUnits,
    // Practical topics from real jobs. Optional: they're suggested as extra reading, not as the daily lesson.
    ...sections.map((s) => ({
      id: s.id,
      title: s.title,
      blurb: s.blurb,
      group: 'On the job',
      elective: true,
      lessons: s.lessons,
    })),
  ],
  drills: [...drills, ...structureDrills, ...databaseDrills],
}
