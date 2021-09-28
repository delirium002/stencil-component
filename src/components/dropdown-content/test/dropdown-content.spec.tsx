import { newSpecPage } from '@stencil/core/testing';
import { DropdownContent } from '../dropdown-content';

describe('dropdown-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownContent],
      html: `<dropdown-content></dropdown-content>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-content>
    `);
  });
});
