import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render title', async () => {
    const { getByText } = await render(`<app-root></app-root>`, {
      declarations: [AppComponent],
    });

    expect(getByText('angular-testing-library-sandbox app is running!'));
  });
});
