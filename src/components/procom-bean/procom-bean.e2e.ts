import { newE2EPage } from '@stencil/core/testing';

describe('procom-bean', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<procom-bean></procom-bean>');
    const element = await page.find('procom-bean');
    expect(element).toBeNull;
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<procom-bean></procom-bean>');
    const component = await page.find('procom-bean');
    const element = await page.find('procom-bean >>> span');
    expect(element.textContent).toEqual(`Procom Bean`);

    component.setProperty('name', 'Coffee');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Coffee`);

    component.setProperty('name', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Quincy`);

    component.setProperty('name', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Earl`);
  });
});
