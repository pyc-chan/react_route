import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 라우터의 영향을 받지 않고  */}
        <Header />
        <Routes >
          {/* path="/"는 첫페이지를 의미한다.(홈페이지) */}
          <Route path='/' element={<DayList />}/>
          {/* 동적라우딩 */}
          <Route path='/day/:day' element={<Day />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
