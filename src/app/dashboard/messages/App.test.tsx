import ReactDOM from 'react-dom';
import App from './page';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(() => {
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    }).not.toThrow();
  });
});
