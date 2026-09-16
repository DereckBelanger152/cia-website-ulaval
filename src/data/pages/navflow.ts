import type { ProjectPageSpec } from '../projectPages';

export const navflow: ProjectPageSpec = {
  key: 'navflow',
  edition: 'readout',
  titleKey: 'home.projects.navflow.title',
  hero: {
    bodyKeys: ['navflow.hero.subtitle', 'navflow.hero.paragraph1', 'navflow.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'navflow.team.title',
      itemKeys: ['navflow.team.lead', 'navflow.team.size'],
    },
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'navflow.mission.title',
      bodyKeys: ['navflow.mission.paragraph1', 'navflow.mission.paragraph2'],
    },
    {
      kind: 'list',
      titleKey: 'navflow.deliverables.title',
      itemsKey: 'navflow.deliverables.items',
    },
    {
      kind: 'steps',
      titleKey: 'navflow.timeline.title',
      itemsKey: 'navflow.timeline.items',
    },
    {
      kind: 'columns',
      titleKey: 'navflow.tech.title',
      columns: [
        {
          titleKey: 'navflow.tech.stack.title',
          items: [
            'Python',
            'C++',
            'JavaScript / TypeScript',
            'SUMO',
            'PyTorch / TensorFlow',
            'Gymnasium',
            'Docker',
            'Matplotlib / Plotly',
          ],
        },
        { titleKey: 'navflow.tech.learning.title', itemsKey: 'navflow.tech.learning.items' },
      ],
    },
    {
      kind: 'cards',
      titleKey: 'navflow.benefits.title',
      itemsKey: 'navflow.benefits.items',
    },
  ],
  cta: {
    bodyKeys: ['navflow.cta.title'],
    emphasisKey: 'navflow.cta.subtitle',
  },
  seo: {
    titleKey: 'navflow.meta.title',
    descriptionKey: 'navflow.meta.description',
    path: '/navflow',
  },
};
