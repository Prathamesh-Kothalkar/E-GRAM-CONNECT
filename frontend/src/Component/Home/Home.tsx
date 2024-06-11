
import Members from '../Members/Members'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import Slideshow from './SlideShower'
export default function Home(){
    return <>
    <div className="py-14 w-full h-full bg-slate-200">
        <div className="p-2 w-full h-full">
            <Slideshow/>
            <AboutSection/>
            <Members/>
            <ServiceSection/>
        </div>
    </div>
    </>
}