climport { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stablebobcat.b2clogin.com/3a44960e-a017-4538-b1b6-c525efe1df11/b2c_1a_si_v2/oauth2/v2.0/authorize?client_id=36a7bf82-2431-488c-b726-cf1e88232767&redirect_uri=https%3A%2F%2Fgo.stable-bobcat.st-test.vuforia.io%2F.ambassador%2Foauth2%2Fredirection-endpoint&response_type=code&scope=https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fdocument.create+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fdocument.delete+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fdocument.edit+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fdocument.read+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.create+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.delete+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.edit+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.member.create+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.member.delete+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.member.edit+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.member.read+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fenterprise.read+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fpublication.create+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fpublication.delete+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fuser.profile.edit+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fuser.profile.read+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fuser_impersonation+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fwebhook.create+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fwebhook.delete+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fwebhook.edit+https%3A%2F%2Fstablebobcat.onmicrosoft.com%2Famb%2Fwebhook.read+offline_access+openid&state=44bbdcd5892308284152c90da978b41a4239d8089362b0c8821e255ab0d5cacd%3Ahttps%3A%2F%2Fgo.stable-bobcat.st-test.vuforia.io%2Fedito');
  await page.getByPlaceholder('name@domain.com').click();
  await page.getByPlaceholder('name@domain.com').fill('vufoiraqa+manager@gmail.com');
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Manager2022');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Change email' }).click();
  await page.getByPlaceholder('name@domain.com').click();
  await page.getByPlaceholder('name@domain.com').click();
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowLeft');
  await page.getByPlaceholder('name@domain.com').press('ArrowRight');
  await page.getByPlaceholder('name@domain.com').press('ArrowRight');
  await page.getByPlaceholder('name@domain.com').fill('vuforiaqa+manager@gmail.com');
  await page.getByPlaceholder('name@domain.com').press('Enter');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Manager2022');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://go.stable-bobcat.st-test.vuforia.io/edito');
  await page.getByRole('link', { name: 'click here to get back home' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#vuforia-editor').getByRole('link', { name: 'Sign In' }).click()
  ]);
  await page1.getByText('QA2 QA2 Manager').click();
});