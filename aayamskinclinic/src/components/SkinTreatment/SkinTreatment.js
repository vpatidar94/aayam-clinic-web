import React, { useState, useEffect } from 'react';
import './SkinTreatment.css';
import Footer from '../Footer/Footer';
import GoToTopButton from '../GoToTopButton/GoToTopButton';

const SkinTreatment = () => {
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
            title: 'Acne Treatment',
            description:
                'Acne is a very common skin condition that causes pimples. You’ll usually get pimples on your face. Clogged pores cause acne. Teenagers and young adults most often get acne, but it can also occur during adulthood for many people. Treatment is available to clear acne from your skin and prevent scarring.',
            extraDetails:
                'Acne usually affects everyone at some point in their lifetime. It’s most common among teenagers and young adults undergoing hormonal changes, but acne can also occur during adulthood. Adult acne is more common among women and people assigned female at birth (AFAB). You may be more at risk of developing acne if you have a family history of acne (genetics).',
            image: 'images/treatment/acne-treatment.jpg',
        },
        {
            title: 'Dark Circles Treatment',
            description:
                'Dark circles under your eyes mean the area of skin below your eyes looks darkened. This area may appear as shades of blue, purple, brown or black, depending on your natural skin color. Dark circles under your eyes may make you look tired or older than you are.',
            extraDetails:
                'iPeel- The commonly known eye bags or the puffiness under the eyes and pigmentation are a result of the combined effect of inflammation, chronic sun damage and the downward pull of gravity on under eye circles. Chemical peels are effective in rejuvenating skin around the eyes by exfoliating damaged upper layers of skin to reveal new, healthier skin, increasing elasticity, and moisturizing skin.',
            image: 'images/treatment/dark-circles.jpg',
        },
        {
            title: 'Psoriasis Treatment',
            description:
                'Psoriasis treatments aim to stop skin cells from growing so quickly and to remove scales. Options include creams and ointments (topical therapy), light therapy (phototherapy), and oral or injected medications...',
            extraDetails:
                'Psoriasis is a common, long-term (chronic) disease with no cure. It can be painful, interfere with sleep and make it hard to concentrate. The condition tends to go through cycles, flaring for a few weeks or months, then subsiding for a while. Common triggers in people with a genetic predisposition to psoriasis include infections, cuts or burns, and certain medications.',
            image: 'images/treatment/psorisis.jpg',
        },
        {
            title: 'Eczema Treatment',
            description:
                'Eczema is a condition that causes your skin to become dry, itchy and bumpy. This condition weakens your skin’s barrier function, which is responsible for helping your skin retain moisture and protecting your body from outside elements.',
            extraDetails:
                'Eczema is a type of dermatitis. Dermatitis is a group of conditions that cause skin inflammation.',
            image: 'images/treatment/eczema.jpg',
        },
        {
            title: 'Vitiligo Treatment',
            description:
                'Vitiligo is a condition that causes depigmentation of parts of the skin, characterized by presence of white patches on the skin. It occurs when melanocytes, the cells responsible for skin pigmentation, die or are unable to function. The goal of vitiligo treatment in Delhi is to improve the appearance of skin lesions.',
            extraDetails:
                'Depending upon the size, number and location of white patches, an individualized treatment plan (medical, surgical and adjunctive therapies) can be tailor made for the patient.',
            image: 'images/treatment/vitiligo.jpg',
        },
        {
            title: 'Hairfall Treatment',
            description:
                'Hair fall is a natural process that everyone experiences on a daily basis but the problem arises when new hair growth does not take place. Hair fall problems can affect both men and women at any age, however, male pattern hair loss is different from female pattern hair loss. There can be various reasons that can trigger hair fall in a person including deficiencies in blood, heredity, etc.',
            extraDetails:
                'Patient’s medical history and scalp examination is also done for further investigation. So, it is crucial to first identify the root cause of the hair fall or hair loss problem in order to provide the right diagnosis and treatment. Generally, medication helps to restore hair growth but for severe cases of hair fall, advanced dermatology treatments like mesotherapy, growth factor therapy, root restore therapy, advanced hair growth promoters, and hair transplant are recommended.These treatments are customized to meet the individual needs. Most of these treatments are developed by in-house hair fall doctors by combining various treatment modalities to optimize the results.',
            image: 'images/treatment/hairremove.jpg',
        },
        {
            title: 'Skin Allergy',
            description:
                'A skin allergy is when skin becomes irritated because the immune system reacted to something that is usually harmless. This is called an allergic reaction. An allergic reaction can cause rash, itching, burning, redness, bumps, hives, and swelling. Many different allergens can cause a reaction.',
            extraDetails:
                (<>
                    <h5>The symptoms of a skin allergy vary depending on the type of reaction:</h5>
                    <ul>
                        <li><strong>Eczema</strong> causes an itchy, scaly, red, dry rash, especially on the face, hands, elbows, and knees. Sometimes eczema weeps clear fluid as well.</li>
                        <li><strong>Allergic contact dermatitis</strong> causes a rash that may be itchy but is often painful. The rash may have both raised bumps and blisters. The reaction may happen right away or it may be up to 48 hours after your skin was exposed to whatever is causing it to react.</li>
                        <li><strong>Hives </strong>are raised, flat, itchy bumps that may also be tender. Hives are a sign of a potentially serious allergic reaction.</li>
                        <li><strong>Angioedema</strong> is a type of swelling. For example, angioedema on the eyelid can cause your eye to be swollen shut. When it happens in the throat, it is an emergency because the swelling makes it hard to breathe.</li>
                    </ul>
                </>),
            image: 'images/treatment/skin allergy.jpg',
        },

    ];

    return (
        <>
            <div className="page-title-section text-center">
                <h1 className="page-title">SKIN CARE TREATMENT</h1>
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

export default SkinTreatment;
