import Comparison from "../views/Comparison"
import Navbar from "../views/Navbar"
import SearchResult from "../views/SearchResult"
import Footer from "../views/Footer"
import Hospitals from "../views/Hospitals"

const SearchPage = () => {
  return (
    <div>
      <Navbar />
      <SearchResult />
      <Comparison />
      <Hospitals />
      <Footer />
    </div>
  )
}

export default SearchPage
