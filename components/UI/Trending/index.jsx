import { SearchSvg } from '../../../utils/svgs'
import Container from '../../Layout/Container'
import cls from './Trending.module.scss'

const Trending = () => {
  const searches = [
    { id: 1, text: 'PCR Nasal Swab' },
    { id: 2, text: 'Mammogram' },
    { id: 3, text: 'Skin Biopsy' },
    { id: 4, text: 'Ultrasound' },
    { id: 5, text: 'Blood Test' },
    { id: 6, text: 'Lorem' },
  ]

  return (
    <div className={cls.trending}>
      <h5 className={cls.title}>Trending searches:</h5>
      <div className={cls.searches}>
        {searches.map((search) => (
          <div key={search.id} className={cls.search}>
            <SearchSvg />
            <span>{search.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
