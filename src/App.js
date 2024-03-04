import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import CustomImageList from './components/ImageList';
import SixthScreen from './screens/SixthScreen';
import TrainerCard from './components/trainers/TrainerCard';
import BasicAccordion from './components/questions/Akordion';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <FirstScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  {/* <CustomImageList/> */}
  <SecondScreen/>
<FifthScreen/>
<SixthScreen/>
<TrainerCard/>
<BasicAccordion/>
<ByMe/>
  </>
}

export default App;
