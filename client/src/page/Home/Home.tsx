import { FC } from 'react'
import CreateWord from '../../widgets/CreateWord/CreateWord'
import Words from '../../widgets/Words/Words'
import './home.scss'

const Home: FC = () => {
    return (
        <section>
            <CreateWord />
            <Words type={0} />
        </section>
    )
}

export default Home