import { newE2EPage } from '@stencil/core/testing';

describe('procom-multiselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<procom-multiselect></procom-multiselect>');
    const element = await page.find('procom-multiselect');
    expect(element).toBeNull;
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<procom-multiselect></procom-multiselect>');
    const component = await page.find('procom-multiselect');
    const element = await page.find('procom-multiselect >>> button');
    expect(element.textContent).toEqual(` `);

    component.setProperty('name', 'Coffee');
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
