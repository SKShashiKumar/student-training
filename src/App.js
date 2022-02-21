import BannerPage from './components/BannerPage';
import Header from './components/Header'
import Footer from './components/Footer';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import EnglishWithoutRules from './components/EnglishWithoutRules';
import AFewWordAbout from './components/AFewWordsAbout';
import Lists from './components/Lists';
import MeetOutTeam from './components/MeetOutTeam';
import Testi from './components/Testi';
function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPage/>
      <SecondRow/>
      <ThirdRow/>
      <EnglishWithoutRules/>
      <AFewWordAbout/>
      <Lists/>
      <MeetOutTeam/>
      <Testi/>
      <Footer/>
    </div>
  );
}

export default App;
