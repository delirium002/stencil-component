import { newSpecPage } from '@stencil/core/testing';
import { DropButton } from './drop-button';

describe('drop-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DropButton],
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
      components: [DropButton],
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
