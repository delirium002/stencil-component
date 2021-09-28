import { newSpecPage } from '@stencil/core/testing';
import { DropDownSelect } from './dropdown-select';

describe('drop-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DropDownSelect],
      html: '<drop-button></drop-button>',
    });
    expect(root).toEqualHtml(`
      <drop-button>
        <mock:shadow-root>
        <button></button>
        </mock:shadow-root>
      </drop-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DropDownSelect],
      html: `<drop-button title="Stencil"></drop-button>`,
    });
    expect(root).toEqualHtml(`
      <drop-button title="Stencil">
        <mock:shadow-root>
          <div>
            <button>Stencil</button>
          </div>
        </mock:shadow-root>
      </drop-button>
    `);
  });
});
