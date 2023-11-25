import Base from '../components/Base'
import NewsFeed from '../components/NewsFeed';
import PageTitle from '../components/common/PageTitle';
import Hero from '../components/common/hero/Hero';
const HomePage = () => {
    return (
        <Base title='Home Page'>
            <Hero />
            <NewsFeed />
        </Base>
    )
}

export default HomePage;