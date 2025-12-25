import logo from './logo.svg';
import { Content, Footer, Header } from './func-components.js';
import Calendar from './class-components';

function App() {
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
    </>
  )
}

export default App;
