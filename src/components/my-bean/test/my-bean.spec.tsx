import { newSpecPage } from '@stencil/core/testing';
import { MyBean } from '../my-bean';

describe('my-bean', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyBean],
      html: `<my-bean></my-bean>`,
    });
    expect(page.root).toEqualHtml(`
      <my-bean>
        <mock:shadow-root>
          <span>x</span>
        </mock:shadow-root>
      </my-bean>
    `);
  });
});
