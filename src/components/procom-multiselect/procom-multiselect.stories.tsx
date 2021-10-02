import readme from './readme.md';
import { withDesign } from 'storybook-addon-designs';
// import { h } from '@stencil/core';

// import { ProcomMultiSelect } from './procom-multiselect';

export default {
  title: 'Procom multiselect',
  // component: ProcomMultiSelect,
  notes: readme,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
  },
};

// export const myStory = () => <procom-multiSelect></procom-multiSelect>;

// myStory.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
//   },
// };
