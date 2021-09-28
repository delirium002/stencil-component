import { newE2EPage } from '@stencil/core/testing';

describe('my-bean', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-bean></my-bean>');

    const element = await page.find('my-bean');
    expect(element).toHaveClass('hydrated');
  });
});
