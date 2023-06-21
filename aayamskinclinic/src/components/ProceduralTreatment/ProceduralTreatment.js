import React, { useState, useEffect } from 'react';
import '../SkinTreatment/SkinTreatment.css';
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const ProceduralTreatment = () => {
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
            title: 'Wart Removal',
            description:
                'Warts are skin problems because of HPV virus. They appear as outgrowths from the skin. The commonest areas are beard, face, head & private parts. Otherwise these can come up anywhere on the body. The primary treatment for warts is its removal with electric cautery. The chances of recurrence in warts are very high. Palms and soles can also suffer from viral warts.',
            extraDetails:
                (<>
                    <p>Warts are infective lesions and can spread from one area to other and also from one person to another. The new M22 system has the IPL where a specific wavelength can be used to treat warts in areas where local injections are removals can be troublesome or painful. In case of multiple resistant plantar warts (warts over foot) IPL laser can show good results.</p>
                </>),
            image: 'images/treatment/wart-removal.jpg',
        },
        {
            title: 'Skin Tag Removal',
            description:
                'These are small out pouchings of skin, skin coloured or dark, big or small, generally seen on skin fold areas like neckline, armpits, below breasts, upper thighs etc. Skin tags can also come on eyelids and rest of the face. The treatment includes Radiofrequency removal. The chances of recurrence are high.',
            extraDetails:
                (<>
                    <h5>The reasons behind skin tags are:</h5>
                    <ul>
                        <li>Genetic background</li>
                        <li>Excess weight</li>
                        <li>Skin tendency</li>
                    </ul>                </>),
            image: 'images/treatment/skin-tag-removal.jpg',
        },
        {
            title: 'Mole Removal',
            description:
                'Moles are a type of growth that can occur anywhere on the skin, on any part of the body. Moles are caused when Melanocyte cells grow in a cluster instead of being evenly spread throughout the skin.The size and colour of the moles varies from patient to patient. Generally, moles tend to be brown or black in colour and are mostly harmless. But some moles may not be aesthetically pleasing to look at, especially if they are on the patient’s face.',
            extraDetails:
                (<>
                    <p>Radio frequency technique is used for removal of small moles over face and body. Surgical removal and stitches may be needed in case of bigger and deeper moles. CO2 laser is used as a surgical knife for smooth and fine removal of moles and minimal scarring.</p>
                </>),
            image: 'images/treatment/facial_mole.jpg',
        },
        {
            title: 'Keloid Treatment',
            description:
                'These are unsightly scars which have the capacity to spread into surrounding normal tissues. Most people are born with tendencies to develop keloids. In these, any small or big wound can become a keloid. The common areas are chest, shoulders, joints, ears or sites of injury or piercing. Keloid treatment is cumbersome and chances of recurrence are high.',
            extraDetails:
                (<>
                    <p><strong>Silicon &amp; Gels/Cream:</strong>&nbsp;Silicon gel sheets and silicon based gels along with topical steroid creams helps in softening the keloid. They also help with colour changes are betterment of keloid. These can be used to suppress the recurrence as well. Adhesive tapes are the most useful.</p>
                    <p><strong>Injections:</strong> Triamcinolone acetonide and 5FU are the commonly used injections into keloid sites to reduce its thickness and limit its spread. They have to be used very carefully as they may have their side effect profiles in the long run. Multiple such injections might be needed depending on the extent of your keloid. These can be painful and thus can be used under topical Emla or Local Anaesthesia with Lignocaine. Please speak to your skin care provider if you are a candidate to take these.</p>
                    <p><strong>Lasers:</strong>&nbsp;Fractional CO<sub>2</sub>&nbsp;and Pulse dye laser have shown some help. Small localised keloids can be very carefully removed with intralesional CO<sub>2</sub>&nbsp;laser excision. It is a meticulous job and the risk of developing keloid in lasered areas cannot be neglected.</p>

                </>),
            image: 'images/treatment/keloid.jpg',
        },
        {
            title: 'Xanthelasma',
            description:
                'A xanthelasma is a harmless yellow bump on or near your eyelid skin. A type of xanthoma, or cholesterol deposit, a xanthelasma can be soft, chalky or semi-solid. Removal options range from surgery to using a chemical peel or heat or cold. Treatments are effective, but it may take several sessions. Xanthelasmas may come back after removal.',
            extraDetails:
                (<>
                    <p>Half of the people with xanthelasmas have high cholesterol levels. Healthcare providers usually see these levels in people with the kind of high cholesterol you get from your parents or some liver diseases. However, the other 50% of people with xanthelasmas don’t have high cholesterol.</p>
                </>),
            image: 'images/treatment/xan.jpg',
        },

    ];

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">PROCEDURAL TREATMENT</h1>
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
            <GoToTopButton/>
            <Footer/>
        </>
    );
};

export default ProceduralTreatment;
