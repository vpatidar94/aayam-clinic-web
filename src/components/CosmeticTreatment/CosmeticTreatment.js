import React, { useState, useEffect } from 'react';
import '../SkinTreatment/SkinTreatment.css';
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const CosmeticTreatment = () => {
    const [showExtraDetails, setShowExtraDetails] = useState([]);

    const toggleExtraDetails = (index) => {
        setShowExtraDetails((prevState) => {
            const updatedState = prevState.map((state, i) => i === index ? !state : false);
            return updatedState;
          });
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        setShowExtraDetails(Array(treatments.length).fill(false)); 
    }, [])


    const treatments = [
        {
            title: 'PRP (PLATELET RICH PLASMA THERAPY)',
            description:
                'Although blood is mainly a liquid (called plasma), it also contains small solid components (red cells, white cells, and platelets). The platelets are best known for their importance in clotting blood. However, platelets also contain hundreds of proteins called growth factors that are very important in the healing of injuries.',
            extraDetails: (<>
                <p className='treatment-info'>PRP is plasma with many more platelets than what is typically found in blood. The concentration of platelets — and, thereby, the concentration of growth factors — can be 5 to 10 times greater (or richer) than usual.</p>
                <p className='treatment-info'>To develop a PRP preparation, blood must first be drawn from a patient. The platelets are separated from other blood cells and their concentration is increased by spinning the blood down during a process called centrifugation. These platelets are then injected into the injured site.</p>
            </>),
            image: 'images/treatment/platelet-rich-plasma.jpg',
        },
        {
            title: '(PRP) Therapy For Hair loss And Skin Rejuvenation',
            description:
                'With a thin needle, your own Platelet-Rich Plasma (PRP) is injected into the scalp. The growth factors in the PRP will stimulate hair growth. PRP Hair Restoration is suitable for both men and women. It is a state-of-the-art, non-surgical, totally natural, alternative medical procedure used for the treatment of hair loss or hair thinning.',
            extraDetails: (
                <>
                    <p>It is an injectable treatment that uses the patient’s own blood. Our blood plasma (PRP) contains active growth factors which can promote hair growth. Helping to restore one’s confidence, the end result is a fuller, healthier-looking head of hair. It is possible to use PRP Hair Loss Therapy alone to promote hair growth or it can also be used in combination with hair transplant.</p>
                    <h3 >Advantages of PRP Therapy Against Hair Loss</h3>
                    <ul>
                        <li>Simple, nonsurgical procedure</li>
                        <li>Multiple Injections: procedure lasting approximately 60 to 90 minutes</li>
                        <li>Safe and reliable results</li>
                        <li>Very quick recovery period.</li>
                        <li>Beautiful and above all extremely natural looking end results</li>
                    </ul>
                </>),
            image: 'images/treatment/(PRP) Therapy For Hair loss And Skin Rejuvenation.jpg',
        },
        {
            title: 'Chemical peeling for Pimples And Dark Spots',
            description:
                'A chemical peel can be beneficial not only for your facial skin but to also improve the appearance of the skin on your hands and neck. Peeling is a very old technique which is still being used for skin rejuvenation. In old times, sour milk and wine were some of the most popular ingredients for facials as well as beauty baths.',
            extraDetails: (<>
                <p>As the name suggests, these peels remove the upper layer of the skin which is dead and impure in order to grow new skin layer in its place which will be young, plump and radiant in comparison to the old top layer of the skin.
                    Aayam skin care provides you an advanced chemical peel treatment in Indore to do away with skin pigmentation once and for all. You'll be amazed to see how fresh and enhanced your skin colour & texture will be.</p></>),
            image: 'images/treatment/chemical-peeling.jpg',
        },
        {
            title: 'Dermaroller Therapy For Acne Scars And Stretch Marks',
            description:
                'Patient with mild scarring can benefit from the procedure of dermaroller treatment for acne scar in Indore. A dermaroller for acne scar is a hand held device with micro needles. Before starting the procedure, a topical numbing gel is applied to the treatment area for optimal comfort. During the procedure, the needles of dermaroller for acne scar, create pores in the dermis, which encourage the release of growth factors and cytokines.',
            extraDetails:
                'The growth factors and cytokines in turn generate a wound healing cascade by stimulating collagen, elastin, and neovascularization. Needling sessions are typically done at an interval as suggested. During the procedure, we apply serums to the treated area, specific to your skin concerns: (hyaluronic acid, growth factors and skin boosters for ant aging); (for facial rejuvenation and glow, vitamin C serums and skin enhancers are used); (vitamin E and rosehip oils for stretch marks); (collagen and elastin containing serums for acne scars).',
            image: 'images/treatment/Dermaroller-Treatment.jpg',
        },
        {
            title: 'Mezo Therapy',
            description:
                'Skin discoloration or pigmentation is an unwanted skin condition. Mesotherapy is an exceptionally useful treatment when we talk about skin pigmentation. Also, Mesotherapy cost is very affordable. We use vitamin C and more such ingredients which actively help in the reduction of skin discoloration.',
            extraDetails:
                'These ingredients are instilled into your facial skin through Electrophoration. It works on the deeper layer of the skin and protects it from free radicals to give your skin a refreshed look.',
            image: 'images/treatment/mesotherapy.jpg',
        },
        {
            title: 'Laser hair removal',
            description:
                'Laser hair removal is a medical procedure that uses a concentrated beam of light (laser) to remove unwanted hair. During laser hair removal, a laser emits a light that is absorbed by the pigment (melanin) in the hair. The light energy is converted to heat, which damages the tube-shaped sacs within the skin (hair follicles) that produce hairs. This damage inhibits or delays future hair growth.',
            extraDetails: (<>
                <p>Although laser hair removal effectively delays hair growth for long periods, it usually doesn't result in permanent hair removal. Multiple laser hair removal treatments are needed for initial hair removal, and maintenance treatments might be needed as well. Laser hair removal is most effective for people who have light skin and dark hair, but it can be successfully used on all skin types.</p></>),
            image: 'images/treatment/laser-body-hair-removal.jpg',
        },
        {
            title: 'HYDRAFACIAL',
            description:
                'Hydrafacial or Hydra-dermabrasion uses the patented technology to cleanse, extract, hydrate, and detan the skin at the same time. It is a 60-minute treatment that involves five steps.',
            extraDetails:
                (<>
                    <h5>The symptoms of a skin allergy vary depending on the type of reaction:</h5>
                    <ol>
                        <li>The first being <strong>Lymphatic Drainage</strong>, the Hydrafacial device uses high-pressure suction applied in a specialized directional method to manually massage and <strong>drain lymph</strong> nodes. It helps improves skin tone by flushing out the toxins through your lymphatic drainage and improves blood circulation.</li>
                        <li>The second step is <strong>Exfoliation</strong>, which is done using cocktails of serums containing glucosamine and lactic acid. These serums help remove the dull damaged pigmented skin cells giving fresh and bright skin.&nbsp;</li>
                        <li>Third step is <strong>Cleansing, Peeling, and Extraction</strong> in which the combination of peels is used including glycolic acid and salicylic acids that delivers the benefits of a peel without post-peel scaling. The gentle salicylic acid peels clean the pores by loosening the debris and dirt. It removes excess oil from the skin and unclogs the pores. Glycolic acid removes pigmented cells and gives brighter look. For mature skin, another combination of age refining peptides can be used to reduce fine lines and boost collagen build-up in the skin and work upon signs of ageing by using additional serums of growth factors.&nbsp;</li>
                        <li>Further, in the fourth step we do <strong>Infusion protection and Hydration</strong> using the serums, intense moisturizers that quench the skin. Multiple serums are used combining antioxidant peptides to protect the skin, to reverse the damages done by UV rays, pollution, or dirt, and hyaluronic acid that helps nourish and hydrate the skin making it supple. Anti-ageing peptides maximize the glow by collagen production and reversing the signs of ageing. Along with facial rejuvenation with customized serums, it also works brilliantly for acne, tanning, uneven skin tone, and sensitive skin.&nbsp;</li>
                        <li>Lastly <strong>Bio-lights</strong> are done. Red Light helps in triggering collagen production and works on signs of ageing and Blue Light is for oily, pimple prone skin. Blue light removes excess oil from the skin, shrinks sebaceous glands, and reduces sebum production.&nbsp;</li>
                    </ol>
                </>),
            image: 'images/treatment/hydraFacial-1.jpg',
        },
    ];

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">COSMETIC TREATMENT</h1>
            </div>
            <div className='common-padding'>
                {treatments.map((treatment, index) => (
                    <div className='card-container' key={index}>
                        <div className='card-details'>
                            <div className='info-container'>
                                <h1 className='treatment-title'>{treatment.title}</h1>
                                <p className='treatment-info'>{treatment.description}</p>
                            </div>
                            <img src={treatment.image} className='treatment-img' alt={treatment.title} />
                        </div>
                        <div
                            className={`extra-details-container${showExtraDetails[index] ? ' open' : ''}`}>
                            <div className='treatment-info'>{treatment.extraDetails}</div>
                        </div>

                        <button
                            onClick={() => toggleExtraDetails(index)}
                            className='button treatment-btn'
                        >
                            {showExtraDetails[index] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}
            </div>
            <GoToTopButton />
            <Footer />
        </>
    );
};

export default CosmeticTreatment;
