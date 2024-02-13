import Page from './Page';
import NewsProvider from './provider/NewsProvider';

function App() {
  return (
    <NewsProvider>
      <Page />
    </NewsProvider>
  );
}

export default App;
