import React, {useEffect} from 'react'
import Footer from '../../Footer/Footer'
import GoToTopButton from '../../GoToTopButton/GoToTopButton'

const DentalTips = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <div className="page-title-section text-center">
                <h1 className="page-title">DENTAL TIPS</h1>
            </div>

            <section class="section service-2 common-padding tips-container ">
                <h3 class="text-color ">Oral Health Fast Facts</h3>

                <ol >

                    <li class="font-weight-bold text-justify tips-list">Oral health is essential to general health and well-being.</li>

                    <li class="font-weight-bold text-justify tips-list">Oral disease can cause pain and infections that may lead to problems with eating, speaking, and learning. It can also affect social interaction and employment potential.</li>

                    <li class="font-weight-bold text-justify tips-list">The three oral conditions that most affect overall health and quality of life are cavities, severe gum disease, and severe tooth loss.</li>

                    <li class="font-weight-bold text-justify tips-list">By age 8, over half of children (52%) have had a cavity in their primary (baby) teeth.</li>

                    <li class="font-weight-bold text-justify tips-list">Children from low-income families are twice as likely to have cavities as children from higher-income families. </li>

                    <li class="font-weight-bold text-justify tips-list">1 in 4 adults aged 20 to 64 currently has cavities.</li>

                    <li class="font-weight-bold text-justify tips-list">Drinking fluoridated water and getting dental sealants (in childhood) prevent cavities and save money by avoiding expensive dental care. </li>

                    <li class="font-weight-bold text-justify tips-list">Tobacco use and diabetes are two risk factors for gum disease.</li>
                    <li class="font-weight-bold text-justify tips-list">On average, 34 million school hours are lost each year because of unplanned (emergency) dental care, and over $45 billion in US productivity is lost each year due to untreated dental disease.</li>
                    <li class="font-weight-bold text-justify tips-list">Medical-dental integration between oral health and chronic disease prevention programs benefits patients and saves money.</li>
                </ol>

            </section>

            <section class="section service-2 common-padding tips-container">
                <h3 class="text-color ">Oral Health Tips</h3>
                <p>You can keep your teeth for your lifetime. Here are some things you can do to maintain a healthy mouth and strong teeth. </p>

                <ol >

                    <li class="font-weight-bold text-justify tips-list">Practice good oral hygiene. Brush teeth thoroughly twice a day and floss daily between the teeth to remove dental plaque.</li>

                    <li class="font-weight-bold text-justify tips-list">Visit your dentist at least once a year, even if you have no natural teeth or have dentures. </li>

                    <li class="font-weight-bold text-justify tips-list">Do not use any tobacco products. If you smoke, quit. </li>

                    <li class="font-weight-bold text-justify tips-list">Limit alcoholic drinks.</li>

                    <li class="font-weight-bold text-justify tips-list">If you have diabetes, work to maintain control of the disease. This will decrease risk for other complications, including gum disease. Treating gum disease may help lower your blood sugar level. </li>

                    <li class="font-weight-bold text-justify tips-list">If your medication causes dry mouth, ask your doctor for a different medication that may not cause this condition. If dry mouth cannot be avoided, drink plenty of water, chew sugarless gum, and avoid tobacco products and alcohol. </li>

                    <li class="font-weight-bold text-justify tips-list">See your doctor or a dentist if you have sudden changes in taste and smell. </li>

                </ol>

            </section>
            <GoToTopButton/>
            <Footer/>
        </>
    )
}

export default DentalTips