import type { ProjectPageSpec } from '../projectPages';

export const hemomentor: ProjectPageSpec = {
  key: 'hemomentor',
  edition: 'readout',
  titleKey: 'home.projects.hemomentor.title',
  hero: {
    bodyKeys: [
      'hemomentor.hero.subtitle',
      'hemomentor.hero.paragraph1',
      'hemomentor.hero.paragraph2',
    ],
  },
  blocks: [
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'hemomentor.context.title',
      bodyKeys: ['hemomentor.context.paragraph1', 'hemomentor.context.paragraph2'],
    },
    {
      kind: 'cards',
      titleKey: 'hemomentor.objectives.title',
      itemsKey: 'hemomentor.objectives.items',
    },
    {
      kind: 'list',
      titleKey: 'hemomentor.constraints.title',
      bodyKeys: ['hemomentor.constraints.note'],
      itemsKey: 'hemomentor.constraints.items',
    },
    {
      kind: 'panel',
      titleKey: 'hemomentor.timeline.title',
      subtitleKey: 'hemomentor.timeline.subtitle',
      bodyKeys: ['hemomentor.timeline.description'],
    },
    {
      kind: 'list',
      titleKey: 'hemomentor.deliverables.title',
      itemsKey: 'hemomentor.deliverables.items',
    },
    {
      kind: 'columns',
      titleKey: 'hemomentor.evaluation.title',
      columns: [
        {
          titleKey: 'hemomentor.evaluation.criteria.title',
          itemsKey: 'hemomentor.evaluation.criteria.items',
        },
        {
          titleKey: 'hemomentor.evaluation.resources.title',
          itemsKey: 'hemomentor.evaluation.resources.items',
        },
      ],
    },
    {
      kind: 'tags',
      titleKey: 'hemomentor.domains.title',
      itemsKey: 'hemomentor.domains.items',
    },
    {
      kind: 'cards',
      titleKey: 'hemomentor.benefits.title',
      itemsKey: 'hemomentor.benefits.items',
    },
  ],
  cta: {
    bodyKeys: ['hemomentor.cta.title'],
    emphasisKey: 'hemomentor.cta.subtitle',
  },
  seo: {
    titleKey: 'hemomentor.meta.title',
    descriptionKey: 'hemomentor.meta.description',
    path: '/hemomentor',
  },
};
