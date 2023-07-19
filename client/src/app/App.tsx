import { FC, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../shared/Header/Header'
import Home from '../page/Home/Home'
import Liked from '../page/Liked/Liked'

const App: FC = () => {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/liked' element={<Liked />} />
      </Routes>

    </Fragment>
  )
}

export default App;
