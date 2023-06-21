import React,{useEffect} from 'react'
import Footer from '../../Footer/Footer'
import GoToTopButton from '../../GoToTopButton/GoToTopButton'

const GeneralHealthTips = () => {

    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

  return (
    <>
<div className="page-title-section text-center">
            <h1 className="page-title">GENERAL HEALTH TIPS</h1>
        </div>

     <section className="section service-2 tips-container col-lg-12">
        <ol>
            <div className="text-justify p-2 tip-container">
                <div className="tip-info">
                    <h3 className="text-color ">1. Limit sugary drinks</h3>
                    <p className="text-color-3">Sugary drinks like sodas, fruit juices, and sweetened teas are the primary source of added sugar in the
                        American diet </p>
                    <p className="text-color-3">Unfortunately, findings from several studies point to sugar-sweetened beverages increasing risk of heart
                        disease and type 2 diabetes, even in people who are not carrying excess body fat.</p>
                    <p className="text-color-3">Sugar-sweetened beverages are also uniquely harmful for children, as they can contribute not only to
                        obesity in children but also to conditions that usually do not develop until adulthood, like type 2
                        diabetes, high blood pressure, and non-alcoholic fatty liver disease .</p>
                    <p className="text-color-3">Healthier alternatives include:</p>
                    <ul className="text-color-3">
                        <li>water</li>
                        <li>unsweetened teas </li>
                        <li>sparkling water </li>
                        <li>coffee</li>
                    </ul>
                </div>
                <img src="images\general-tips\gt1.jpg" alt="" className=" tips-img img-fluid w-90 "/>
            </div>


            <div className=" tip-container">
                <div className="tip-info">
                <h3 className="text-color ">
                    2. Eat nuts and seeds
                </h3>
                <p className="text-color-3">Some people avoid nuts because they are high in fat. However, nuts and seeds are incredibly nutritious. They are packed with protein, fiber, and a variety of vitamins and minerals.  </p>
                <p className="text-color-3">Nuts may help you lose weight and reduce the risk of developing type 2 diabetes and heart disease.</p>
                <p className="text-color-3">Additionally, one large observational study noted that a low intake of nuts and seeds was potentially linked to an increased risk of death from heart disease, stroke, or type 2 diabetes.</p>
            </div>
            <img src="images\general-tips\gt2.jpg" alt="" className=" tips-img img-fluid w-90 "/>
        </div>

        <div className=" tip-container">
            <div className="tip-info">
                <h3 className="text-color ">
                    3. Avoid ultra-processed foods
                </h3>
                <p className="text-color-3">Ultra-processed foods are foods containing ingredients that are significantly modified from their original form. They often contain additives like added sugar, highly refined oil, salt, preservatives, artificial sweeteners, colors, and flavors as well. </p>
                <p className="text-color-3">Examples include:</p>
                <ul className="text-color-3">
                    <li>snack cakes</li>
                    <li>fast food </li>
                    <li>frozen meals </li>
                    <li>canned foods</li>
                    <li>chips</li>
                </ul>
                <p className="text-color-3">Ultra-processed foods are highly palatable, meaning they are easily overeaten, and activate reward-related regions in the brain, which can lead to excess calorie consumption and weight gain. Studies show that diets high in ultra-processed food can contribute to obesity, type 2 diabetes, heart disease, and other chronic conditions.</p>
                
                <p className="text-color-3">In addition to low quality ingredients like inflammatory fats, added sugar, and refined grains, they’re usually low in fiber, protein, and micronutrients. Thus, they provide mostly empty calories.</p>
            
            </div>
            <img src="images\general-tips\gt3.jpg" alt="" className=" tips-img img-fluid w-90 "/>
        </div>

            
        <div className=" tip-container">
            <div className="tip-info">
                <h3 className="text-color ">
                    4. Get enough sleep
                </h3>
                <p className="text-color-3">The importance of getting enough quality sleep cannot be overstated. </p>
                <p className="text-color-3">Poor sleep can drive insulin resistance, can disrupt your appetite hormones, and reduce your physical and mental performance.</p>
                
                <p className="text-color-3">What’s more, poor sleep is one of the strongest individual risk factors for weight gain and obesity. People who do not get enough sleep tend to make food choices that are higher in fat, sugar, and calories, potentially leading to unwanted weight gain.</p>
            
            </div>
            <img src="images\general-tips\gt4.jpg" alt="" className=" tips-img img-fluid w-90 "/>
        </div>
            
        <div className=" tip-container">
            <div className="tip-info">
                <h3 className="text-color ">
                    5. Avoid bright lights before sleep
                </h3>
                <p className="text-color-3">When you’re exposed to bright lights — which contain blue light wavelengths — in the evening, it may disrupt your production of the sleep hormone melatonin. </p>
                <p className="text-color-3">Some ways to help reduce your blue light exposure is to wear blue light blocking glasses — especially if you use a computer or other digital screen for long periods of time — and to avoid digital screens for 30 minutes to an hour before going to bed.</p>
                
                <p className="text-color-3">This can help your body better produce melatonin naturally as evening progresses, helping you sleep better.</p>
            
            </div>
            <img src="images\general-tips\gt5.jpg" alt="" className=" tips-img img-fluid w-90 "/>
        </div>
    </ol>



    </section>
    <GoToTopButton/>
    <Footer/>

    </>
  )
}

export default GeneralHealthTips