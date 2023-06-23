import React, { useEffect } from 'react';
import "./SkinTips.css"
import Footer from '../../Footer/Footer';
import GoToTopButton from '../../GoToTopButton/GoToTopButton';

const SkinTips = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">SKIN TIPS</h1>
            </div>
            <section class="section service-2 common-padding tips-container col-lg-12">
                <div class="m-3">
                    <h3 class="text-color ">Skin care secrets for healthier-looking skin</h3>
                    <p>These general skin care tips from dermatologists can benefit just about everyone.</p>
                </div>


                <ol >
                    <div class=" tip-container">
                        <div class="tip-info">
                            <li class="font-weight-bold text-justify tips-list">Apply sunscreen every day before you go outdoors : <span class="font-weight-normal">Sunscreen is the closest thing we have to a fountain of youth. It really can slow down skin aging. It can also help prevent skin cancer. Look for a sunscreen that offers broad-spectrum protection, SPF 30 (or higher), and water resistance.</span>
                                <br />
                                <p class="font-weight-normal mt-2">While it's important to protect infants' skin from the sun, the AAD recommends applying sunscreen ONLY to children who are 6 months and older.</p></li>
                        </div>
                        <img src="images\skin-tips\skin-tips-1.jpg" alt="" class=" tips-img img-fluid w-90" />
                    </div>


                    <div class=" tip-container">
                        <div class="tip-info">
                            <li class="font-weight-bold text-justify tips-list">Drink your daily dose of water :
                                <span class="font-weight-normal">We know how important it’s to drink an adequate amount of water. Yet, so many of us fail to take it seriously and treat it like a choice. Make drinking water as important as your ‘work’. Reach out for an extra glass of water instead of coffee. You can prepare a pitcher of water and add some cucumbers/orange to it. This way, you will provide your skin with a healthy dose of anti-oxidants along with hydration.</span></li>
                        </div>
                        <img src="images\skin-tips\skin-tips-5.jpg" alt="" class=" tips-img img-fluid w-90 " />
                    </div>

                    <div class="tip-container">
                        <div>

                            <li class="font-weight-bold text-justify tips-list">Use a self-tanner if you like looking tanned : <span class="font-weight-normal"> Anytime you tan indoors or outside, you prematurely age your skin. You also increase your risk of getting skin cancer. A self-tanner can give you the look you want without the risks. To keep your skin healthy, you want to protect it from the sun even when using a self-tanner.</span></li>

                            <br />

                            <li class="font-weight-bold text-justify tips-list">Use skin care products that match your skin's needs : <span class="font-weight-normal">  What's your skin type — oily, dry, normal, combination, or sensitive? Do you have a skin condition? Using products formulated for your skin's needs will help your skin look and feel its best.</span></li>
                        </div>

                        <img src="images\skin-tips\skin-tips-2.jpg" alt="" class="tips-img-2 img-fluid" />
                    </div>


                    <div class="tip-container">
                        <div>

                            <li class="font-weight-bold text-justify tips-list">Resist the urge to scrub your skin clean : <span class="font-weight-normal">  If you've been sweating heavily or have a serious acne flare, it may seem natural to scrub your skin. Don't! Scrubbing irritates your skin, which can worsen any skin condition, including acne.</span></li>
                            <br />
                            <li class="font-weight-bold text-justify tips-list">Gently wash your face : <span class="font-weight-normal"> Gentle cleansing helps skin look its best. To gently cleanse your face, wet it with lukewarm water. Then apply a mild cleanser, gently applying the cleanser in a circular motion with your fingertips. Finish by completely rinsing off the cleanser and gently patting your face dry with a clean towel.</span></li>

                        </div>

                        <img src="images\skin-tips\skin-tips-3.jpg" alt="" class="tips-img-2 img-fluid" />
                    </div>

                    <div class="tip-container">
                        <div>

                            <li class="font-weight-bold text-justify tips-list">Stress less : <span class="font-weight-normal"> Finding healthy ways to manage stress can help your skin, too. Some skin diseases like psoriasis and atopic dermatitis (eczema) often appear for the first time when someone feels really stressed. Stress can also cause flare-ups of many skin conditions, including acne, eczema, psoriasis, and rosacea.</span></li>
                            <br />
                            <li class="font-weight-bold text-justify tips-list">See a board-certified dermatologist if you dislike something about your skin : <span class="font-weight-normal"> When it comes to our skin, dermatologists are the experts. These doctors diagnose and treat thousands of different skin diseases. They also have the expertise needed to help people safely rejuvenate and care for their skin.</span></li>
                        </div>
                        <img src="images\skin-tips\skin-tips-4.jpg" alt="" class="tips-img-2 img-fluid" />
                    </div>


                </ol>

            </section>
            <GoToTopButton/>
            <Footer/>
        </>
    )
}

export default SkinTips