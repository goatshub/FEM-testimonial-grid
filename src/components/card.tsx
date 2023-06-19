import Image from "next/image";
import cardStyles from "./card.module.scss";

export type CardProps = {
  cardColor:
    | "card-white"
    | "card-white-2row"
    | "card-grey"
    | "card-purple"
    | "card-darkGrey";
  review: string;
  reviewQuotation: string;
  profileName: string;
  // profilePic: StaticImageData //for imported image
  profilePic: string;
};

const Card = ({
  cardColor,
  review,
  reviewQuotation,
  profileName,
  profilePic,
}: CardProps) => {
  return (
    <div className={`${cardStyles.card} card ${cardColor}`}>
      <div className={`${cardStyles.userHeader}`}>
        <Image
          src={profilePic}
          alt="profile"
          width={30}
          height={30}
          className="profileImg rounded-full border-2"
        />
        <div>
          <h2>{profileName}</h2>
          <p>Verified Graduate</p>
        </div>
      </div>
      <h1 className="text-xl leading-tight">{review}</h1>
      <q className="opacity-75"> {reviewQuotation} </q>
    </div>
  );
};
export default Card;
