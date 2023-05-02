import React from 'react'
import Presentation from "../components/Presentation"
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
import EditChapter from './EditChapter'

export default function Index() {
    return (
        <main id="Home">
            {<Presentation />}
            <div className="min-h-[100vh] relative">
                {/* <Carousel/>
                <Welcome/> */}
                <EditChapter/>
            </div>
        </main>
    )
}
