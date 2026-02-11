
import { Principle, Resource } from './types';

export const PRINCIPLES: Principle[] = [
  {
    id: '1',
    title: 'Visual Hierarchy',
    description: 'Guiding the user\'s eye to the most important elements first using size, color, and placement.',
    icon: '🎯'
  },
  {
    id: '2',
    title: 'Consistency',
    description: 'Reducing cognitive load by making similar elements behave in predictable ways throughout the experience.',
    icon: '🔄'
  },
  {
    id: '3',
    title: 'Affordance',
    description: 'Designing elements that clearly suggest their function, such as buttons that look clickable.',
    icon: '🧤'
  },
  {
    id: '4',
    title: 'Accessibility',
    description: 'Ensuring that products are usable by people of all abilities and in all contexts.',
    icon: '🌍'
  },
  {
    id: '5',
    title: 'Feedback',
    description: 'Providing immediate, clear responses to user actions to confirm that the system processed the input.',
    icon: '💬'
  },
  {
    id: '6',
    title: 'Simplicity',
    description: 'Stripping away unnecessary complexity to let the user focus on the core task.',
    icon: '✨'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    name: 'Roots of UI: Foundation eBook',
    type: 'PDF',
    downloadUrl: '#',
    previewImage: 'https://picsum.photos/seed/design1/400/500'
  },
  {
    id: 'r2',
    name: 'Core UI Kit v1.0',
    type: 'FIGMA',
    downloadUrl: '#',
    previewImage: 'https://picsum.photos/seed/design2/400/500'
  },
  {
    id: 'r3',
    name: 'UX Research Templates',
    type: 'TEMPLATE',
    downloadUrl: '#',
    previewImage: 'https://picsum.photos/seed/design3/400/500'
  }
];
