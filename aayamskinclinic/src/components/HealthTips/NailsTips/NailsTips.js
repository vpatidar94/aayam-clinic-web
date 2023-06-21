import React,{useEffect} from 'react'
import Footer from '../../Footer/Footer'
import GoToTopButton from '../../GoToTopButton/GoToTopButton'

const NailsTips = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">NAILS TIPS</h1>
            </div>

            <section class="section service-2 common-padding tips-container ">
                <h3 class="text-color ">TIPS FOR HEALTHY NAILS</h3>
                <p>Nails reflect our overall health, which is why proper nail care is so important. Here are dermatologists’ tips for keeping your nails healthy:</p>

                <ol >

                    <li class="font-weight-bold text-justify tips-list">Keep nails clean and dry.</li>

                    <li class="font-weight-bold text-justify tips-list">Cut nails straight across : <p class="font-weight-normal"> Use sharp nail scissors or clippers. Round the nails slightly at the tips for maximum strength.</p></li>

                    <li class="font-weight-bold text-justify tips-list">Keep nails shaped and free of snags by filing with an emery board. </li>

                    <li class="font-weight-bold text-justify tips-list">Do not bite fingernails or remove the cuticle : <p class="font-weight-normal"> Doing so can damage the nail.</p></li>

                    <li class="font-weight-bold text-justify tips-list">Do not use your nails as a tool, <span class="font-weight-normal"> such as opening pop cans.</span></li>

                    <li class="font-weight-bold text-justify tips-list">Trim toenails regularly : <p class="font-weight-normal">  Keeping them short will minimize the risk of trauma and injury.</p></li>

                    <li class="font-weight-bold text-justify tips-list">When toenails are thick and difficult to cut, soak your feet in warm salt water : <p class="font-weight-normal"> Mix one teaspoon of salt per pint of water and soak for 5 to 10 minutes.</p></li>

                    <li class="font-weight-bold text-justify tips-list">Avoid “digging out” ingrown toenails, especially if they are infected and sore : <p class="font-weight-normal"> If you are suffering from an ingrown toenail, see a dermatologist for treatment.</p></li>

                    <li class="font-weight-bold text-justify tips-list">Wear shoes that fit properly : <p class="font-weight-normal"> Also alternate which pair of shoes you wear each day.</p></li>

                    <li class="font-weight-bold text-justify tips-list">Wear flip flops at the pool and in public showers : <p class="font-weight-normal">  This reduces the risk of infections caused by a fungus that can get in your toenails.</p></li>
                </ol>

            </section>
            <GoToTopButton/>
            <Footer/>
        </>
    )
}

export default NailsTips