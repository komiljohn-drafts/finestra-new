import Comparison from "../components/UI/Comparison"
import Navbar from "../components/UI/Navbar"
import SearchResult from "../components/UI/SearchResult"
import Footer from "../components/UI/Footer"
import Hospitals from "../components/UI/Hospitals"

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
