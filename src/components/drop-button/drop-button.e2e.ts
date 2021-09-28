import { newE2EPage } from '@stencil/core/testing';

describe('drop-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<drop-button></drop-button>');
    const element = await page.find('drop-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<drop-button></drop-button>');
    const component = await page.find('drop-button');
    const element = await page.find('drop-button >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('name', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);

    component.setProperty('name', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James Quincy`);

    component.setProperty('name', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James Earl Quincy`);
  });
});
