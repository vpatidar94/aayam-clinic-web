import React, { useEffect } from 'react'
import Footer from '../../Footer/Footer'
import GoToTopButton from '../../GoToTopButton/GoToTopButton'

const HairTips = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">HAIR TIPS</h1>
            </div>

            <section className="section service-2 common-padding tips-container col-lg-12">
                <h3 className="text-color tips-heading">HAIR CARE HABITS THAT CAN DAMAGE YOUR HAIR</h3>
                <p className="text-justify">In our quest for beautiful hair, we often do things that damage our hair. Damaged hair is fragile, so it tends to break. Hair breakage can leave us with frizzy, unhealthy looking hair. If we continue to damage our hair, we may eventually see thinning hair or even bald spots.

                    The good news is that simple changes can prevent further hair damage. Here you’ll find most common hair care practices that can damage hair and dermatologists’ tips that can help you to stop the damage.</p>

                <ol className='ps-2' >
                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list ">Washing your hair by rubbing shampoo into the length of your hair : <span className="font-weight-normal"></span>
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Gently massage shampoo into your scalp.</li>
                                    <li>When you rinse the shampoo from your scalp, let it flow through the length of your hair and resist the temptation to rub it into your hair.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-1.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>


                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Skipping the conditioner :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Use conditioner after every shampoo.</li>
                                </ul>
                            </li>

                            <li className="font-weight-bold text-justify tips-list">Drying your hair by rubbing it with a towel :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Wrap your hair in a towel to absorb the water.</li>
                                    <li>Let your hair air dry.</li>
                                </ul>
                            </li>

                        </div>
                        <img src="images\hair-tips\hair-img-2.jpg" alt="" className=" tips-img-2 img-fluid w-90 " />
                    </div>

                    <div className=" tip-container tip-hair">
                        <div className="tip-info">

                            <li className="font-weight-bold text-justify tips-list">Brushing your hair while it is wet :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Do you have straight hair? Let your hair dry a bit before you gently comb it with a wide-tooth comb.</li>
                                    <li>Do you have textured hair or tight curls? Always comb your hair while it is damp, using a wide-tooth comb.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-3.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Using a blow dryer, hot comb, or curling iron :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Let your hair air dry when possible.</li>
                                    <li>Use the lowest heat setting.</li>
                                    <li>Limit the time a hot comb or curling iron touches your hair.</li>
                                    <li>Use these tools less frequently, aiming for once a week — or even less often.</li>

                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-4.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Applying styling products that offer long-lasting hold :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Try a hairstyle that does not require this product.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-5.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Pulling your hair back tightly, such as in a ponytail, bun, or cornrows:
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Wear hair loosely pulled back.</li>
                                    <li>Use covered rubber bands made especially for styling hair.</li>
                                    <li>Try a different hairstyle that does not pull on your hair.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-6.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Wearing a weave or hair extensions :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Wear weaves and extensions that are light, so they do not pull.</li>
                                    <li>Get weaves and hair extensions at a salon that specializes in these services.</li>
                                    <li>Wear a professional weave or hair extension for 2 or 3 months at most.</li>
                                    <li>Keep up your scalp hygiene when wearing a weave or hair extension.</li>
                                    <li>Switch hairstyles, so you don’t always wear a weave or hair extensions.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-7.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Coloring, perming, or relaxing your hair :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Try to add more time between touch-ups, especially when the air is dry. In the winter, try to stretch the time between touch-ups to every 8 to 10 weeks or longer.</li>
                                    <li>Have only one service — a coloring, relaxer, or perm. If you want more than one service, perm or relax your hair first, and do it 2 weeks before you color your hair.</li>
                                    <li>Use conditioner after each shampoo.</li>
                                    <li>When in the sun, protect your hair by using a leave-in conditioner that contains zinc oxide or wearing a wide-brimmed hat.</li>

                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-8.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <div className=" tip-container">
                        <div className="tip-info">
                            <li className="font-weight-bold text-justify tips-list">Brushing your hair 100 strokes a day or tugging on your hair to style it :
                                <br />
                                <ul className="font-weight-normal mt-2">
                                    <h6 className="mb-0 text-color-2">Prevention Tips-</h6>
                                    <li>Brush and comb your hair only to style it. Hair never needs 100 brush strokes a day. That’s a myth.</li>
                                    <li>Use a wide-tooth comb, and use it gently to comb your hair.</li>
                                    <li>Avoid pulling and tugging on your hair as you brush, comb, or style it.</li>
                                    <li>Remove tangles gently, using a moisturizing conditioner if necessary.</li>
                                </ul>
                            </li>
                        </div>
                        <img src="images\hair-tips\hair-img-9.jpg" alt="" className=" tips-img img-fluid w-90 " />
                    </div>

                    <h3 className="mt-4 text-color-2 ">When to see a dermatologist</h3>
                    <p className="text-justify">If changing how you care for your hair does not help you see healthier hair, you may want to see a board-certified dermatologist. Your hair care may not be the root cause of your problem. Seeing a dermatologist is especially important if you are concerned about thinning hair or hair loss. Most causes can be stopped or treated. The sooner the problem is addressed, the better your results.</p>
                </ol>


            </section>
            <GoToTopButton/>
            <Footer/>

        </>
    )
}

export default HairTips