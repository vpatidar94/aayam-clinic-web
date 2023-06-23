import React, { useState, useEffect } from 'react';
import '../SkinTreatment/SkinTreatment.css';
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const DermatoSurgery = () => {
    const [showExtraDetails, setShowExtraDetails] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        setShowExtraDetails(Array(treatments.length).fill(false)); 
    }, [])

    const toggleExtraDetails = (index) => {
        setShowExtraDetails((prevState) => {
            const updatedState = prevState.map((state, i) => i === index ? !state : false);
            return updatedState;
          });
    };

    const treatments = [
        {
            title: 'Vitiligo Surgery',
            description:
                'The skin consists of pigment cells called melanocytes that produce melanin. Melanin is responsible in imparting the skin its colour. Vitiligo is a condition in which these pigments are lost or destroyed. This leaves the skin looking milky white, and can be prominently seen in people with dark skin.',
            extraDetails:
                (<>
                    <p>Vitiligo commonly known as luekoderma is hence a skin problem where the antibodies in human skin target their own colour cells and destroy them, forming white patches on skin. Vitiligo is thus considered as an auto-immune disease, though the exact cause of it is still being researched.</p>
                    <p>Vitiligo affects 0.5–1% of the population, and occurs in all races, though the people of India are particularly susceptible to it. People with vitiligo are more prone to some other diseases as well, though the condition itself is not contagious. People with vitiligo are genetically predisposed to it, and the disease affects both men and women equally.</p>
                    <p>This is only a social and cosmetic problem and not related to ill health. Vitiligo can come on lips, eyelids, private areas, hands, legs and any other area of skin.</p>
                    <p>Extensive surgical and laser treatments help with scar modification and correcting the skin surface irregularity.</p>
                    <p> Punch grafting, skin grafting, blister grafting, surgical removal, melanocyte culture and grafting are few means of surgical treatment of vitiligo.</p>
                </>),
            image: 'images/treatment/acne-treatment.jpg',
        },
        {
            title: 'Nail Surgery',
            description:
                'In some cases apart of the nail or the toenail is to be removed so as to ensure that the nails are growing properly without any infection or discomfort. This removal is done via Nail surgery. The toenail can grow into the flesh of the finger and it can occur due to wearing too tight shoes around a toe, or by cutting toenails with too much of curve or due to a toenail injury or due to any fungal infection or due to a naturally grown curve.',
            extraDetails:
                (<>
                    <p>In all these cases this toenail may bring in discomfort. Similarly the nail may get injured and can get infected. In such cases there is a need to remove the part of the nail or the entire toenail so as to eliminate the infection growth and bring down the discomfort. This is done through nail surgery.</p>
                    <p>The surgery is done under the effect of local anesthesia so that the patient doesn’t feel any discomfort while undergoing the procedure. When the Nail has been successfully removed a particular chemical substance is applied on the nail bed so as to ensure that there is no regrowth of bad cells.</p>
                    <p>Thus the regrowth of the nail cells is destroyed though the application of the chemical but in some cases a regrowth may take place. The surgery is a very simple process and the entire process can take a time period of 1 hour. The recovery time is shall be in between 4 to 8 weeks so that the entire healing of the affected area takes place.</p>
                </>),
            image: 'images/treatment/nail-surgury-banner.jpg',
        },
        {
            title: 'Sebaceous Cysts Removal',
            description:
                'A cyst is a slow-growing, protein-filled, dome-like, yellow or white lump that can move easily under the skin. There are many types of cysts — hundreds, actually. Unlike epidermoid cysts, which originate from the skin, and unlike pilar cysts, which come from hair follicles, true sebaceous cysts are rare and originate from your sebaceous glands.',
            extraDetails:
                (<>
                    <p>The main symptom of a sebaceous cyst is a small lump under the skin. The lump is usually not painful. In some cases, however, cysts can get inflamed and become tender to the touch. The skin on the area of the cyst may be red and/or warm if the cyst is inflamed.</p>
                    <p>Sebaceous cysts normally don’t hurt, but they can become tender, sore and red if they get infected. One sign of infection is redness and swelling around the cyst or foul-smelling drainage seeping out of the cyst. See your healthcare provider if you have such symptoms.</p>
                </>),
            image: 'images/treatment/cyst.jpg',
        },
        {
            title: 'Ear Lobe Repair',
            description:
                'Torn or split earlobes usually occur to women who either have worn heavy earrings or had a child pull on their earring. Earlier cumbersome "surgical treatment with sutures" was the only treatment for delicate earlobes. Earlobe surgery without stitches is a novel surgical technique to repair split earlobes WITHOUT use of stitches. New holes can be created within 3 weeks of this surgery.',
            extraDetails:
                (<>
                    <p>Your long earlobe slits can be repaired within half an hour and you don't need to visit again to take out the stitches. A fine line will appear once healing is complete and this will also fade away with time.</p>
                    <p>The surgery will take less than half an hour.</p>
                </>),
            image: 'images/treatment/Ear-Lobe-Repair.jpg',
        },

    ];

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">DERMATO SURGERIES</h1>
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
                            className={`extra-details-container${showExtraDetails[index] ? ' open' : ''}`}
                        >
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

export default DermatoSurgery;
