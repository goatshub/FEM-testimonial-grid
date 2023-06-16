import Image from 'next/image';
import cardStyles from './card.module.scss';

export type CardProps = {
        cardColor: 'card-white' | 'card-white-2row' |'card-grey' | 'card-purple' | 'card-darkGrey'
        review: string
        reviewQuotation: string
        profileName: string
        // profilePic: StaticImageData //for imported image
        profilePic: string
}

const Card = ({
                cardColor, 
                review, 
                reviewQuotation, 
                profileName,
                profilePic
        }: CardProps
 ) => {
/*
        let review = `I received a job offer mid-course, and the subjects I learned were current, if not more so, 
        in the company I joined. I honestly feel I got every penny’s worth.`
        let reviewQuotation = `I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.`
*/

        return (
        <div className={`${cardStyles.card} card ${cardColor}`} >
                <div className={`${cardStyles.userHeader}`}>
                        <Image 
                                src={profilePic} alt='profile'
                                width={30} height={30} 
                                className='profileImg rounded-full border-2' 
                        />
                        <div>
                                <h2>{profileName}</h2>
                                <p>Verified Graduate</p>
                        </div>
                </div>
                <h1 className='text-xl leading-tight'>{review}</h1>
                <q className='opacity-75'> {reviewQuotation} </q>  
        </div>
        )
}
export default Card