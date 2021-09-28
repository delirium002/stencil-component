import { newSpecPage } from '@stencil/core/testing';
import { Bean } from './bean';

describe('my-dropdown', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Bean],
      html: '<my-dropdown></my-dropdown>',
    });
    expect(root).toEqualHtml(`
      <my-dropdown>
        <mock:shadow-root>
        <button></button>
        <div>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </div>
        </mock:shadow-root>
      </my-dropdown>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Bean],
      html: `<my-dropdown title="Stencil" first="JS" second="TS" third="JSX" forth="TSX"></my-dropdown>`,
    });
    expect(root).toEqualHtml(`
      <my-dropdown title="Stencil" first="JS" second="TS" third="JSX" forth="TSX">
        <mock:shadow-root>
          <div>
            <button>Stencil</button>
              <div>
                <option>JS</option>
                <option>TS</option>
                <option>JSX</option>
                <option>TSX</option>
              </div>
          </div>
        </mock:shadow-root>
      </my-dropdown>
    `);
  });
});
