import BannerPage from './components/BannerPage';
import Header from './components/Header'
import Footer from './components/Footer';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import EnglishWithoutRules from './components/EnglishWithoutRules';
function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPage/>
      <SecondRow/>
      <ThirdRow/>
      <EnglishWithoutRules/>
      <Footer/>
    </div>
  );
}

export default App;
