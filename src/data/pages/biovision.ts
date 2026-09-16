import type { ProjectPageSpec } from '../projectPages';

export const biovision: ProjectPageSpec = {
  key: 'biovision',
  edition: 'readout',
  titleKey: 'home.projects.biovision.title',
  hero: {
    bodyKeys: ['biovision.hero.subtitle', 'biovision.hero.paragraph1', 'biovision.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'biovision.team.title',
      itemKeys: ['biovision.team.leads', 'biovision.team.contacts', 'biovision.team.size'],
    },
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'biovision.context.title',
      bodyKeys: ['biovision.context.paragraph1', 'biovision.context.paragraph2'],
    },
    {
      kind: 'cards',
      titleKey: 'biovision.objectives.title',
      itemsKey: 'biovision.objectives.items',
    },
    {
      kind: 'list',
      titleKey: 'biovision.deliverables.title',
      itemsKey: 'biovision.deliverables.items',
    },
    {
      kind: 'steps',
      titleKey: 'biovision.timeline.title',
      itemsKey: 'biovision.timeline.items',
    },
    {
      kind: 'columns',
      titleKey: 'biovision.tech.title',
      columns: [
        {
          titleKey: 'biovision.tech.stack.title',
          items: [
            'Python',
            'PyTorch',
            'OpenCV',
            'YOLO',
            'Hugging Face',
            'Docker',
            'Pandas / NumPy',
            'Git',
          ],
        },
        { titleKey: 'biovision.tech.skills.title', itemsKey: 'biovision.tech.skills.items' },
      ],
    },
    {
      kind: 'cards',
      titleKey: 'biovision.benefits.title',
      itemsKey: 'biovision.benefits.items',
    },
  ],
  cta: {
    bodyKeys: ['biovision.cta.title'],
    emphasisKey: 'biovision.cta.subtitle',
  },
  seo: {
    titleKey: 'biovision.meta.title',
    descriptionKey: 'biovision.meta.description',
    path: '/biovision',
  },
};
