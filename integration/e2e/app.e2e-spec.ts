import { browser, element, by } from 'protractor';

describe('NgxUid E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should provide service to generate unique ids', () => {
    expect(element(by.css('[divUid]')).getText().then(text => text.startsWith('__ngx_uid_'))).toBeTruthy();
  })

  it('should set unique ids', () => {
    expect(element(by.css('[input1]')).getAttribute("id")).not.toEqual(element(by.css('[input2]')).getAttribute("id"));
  });

  it('should allow ids to be bound', () => {
    expect(element(by.css('[input1]')).getAttribute("id")).toEqual(element(by.css('[label1]')).getAttribute("for"));
  });

});
