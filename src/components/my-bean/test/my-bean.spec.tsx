import { newSpecPage } from '@stencil/core/testing';
import { MyBean } from '../my-bean';

describe('my-bean', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyBean],
      html: `<my-bean><button><span>x</span></button></my-bean>`,
    });
    expect(page.root).toEqualHtml(`
      <my-bean>
        <mock:shadow-root>
        <button><span>x</span></button>
        </mock:shadow-root>
      </my-bean>
    `);
  });
});
