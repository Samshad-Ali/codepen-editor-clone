import EditorWrapper from './components/EditorWrapper.jsx';
import Header from './components/Header.jsx'
import Result from './components/Result.jsx';
import ContextWrapper from './context/ContextWrapper.js';
function App() {
  return (
  <ContextWrapper>
  <Header/>
  <EditorWrapper/>
  <Result/>
  </ContextWrapper>
  );
}

export default App;
