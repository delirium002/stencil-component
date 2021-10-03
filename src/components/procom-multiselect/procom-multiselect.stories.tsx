import readme from './readme.md';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Procom multiselect',
  // component: ProcomMultiSelect,
  notes: readme,
  hamza:'hamzaaa',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
  },
};

