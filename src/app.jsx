import Navbar from './components/Navbar.jsx';
import YoutubeMp3 from './components/youtubeMp3.jsx';
import MovementGuide from './components/movementGuide.jsx';

function App() {
  return (
    <body className='bg-[#f9f9f9] flex flex-col items-center justify-center '>
      <Navbar />
      <YoutubeMp3/>
      <MovementGuide/>
    </body>
  );
}

export default App;
