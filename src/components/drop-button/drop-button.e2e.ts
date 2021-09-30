import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dropdown-select></dropdown-select>');
    const element = await page.find('dropdown-select');
    expect(element).toBeNull;
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<dropdown-select></dropdown-select>');
    const component = await page.find('dropdown-select');
    const element = await page.find('dropdown-select >>> button');
    expect(element.textContent).toEqual(` `);

    component.setProperty('name', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James `);

    component.setProperty('name', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Quincy `);

    component.setProperty('name', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Earl `);
  });
});
