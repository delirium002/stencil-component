import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-content></dropdown-content>');

    const element = await page.find('dropdown-content');
    expect(element).toHaveClass('hydrated');
  });
});
