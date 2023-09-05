import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useContext} from 'react';
import DataContext from './context/DataContext';

const Layout = () => {
  const { search, setSearch} = useContext(DataContext)
  return (
    <div className="App">
      <Header
        title={'React JS Blogs'}

      />
        <Nav
          search={search}
          setSearch={setSearch}
        />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout