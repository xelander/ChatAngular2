import { ChatAngular2Page } from './app.po';

describe('chat-angular2 App', () => {
  let page: ChatAngular2Page;

  beforeEach(() => {
    page = new ChatAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
