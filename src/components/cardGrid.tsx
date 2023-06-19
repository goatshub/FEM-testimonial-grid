import Card from "./card";
import { reviewUsers } from "@/reviewUsers";
import cardGridStyles from "./cardGrid.module.scss";
const CardGrid = () => {
  return (
    <section className={`${cardGridStyles.cardGrid}`}>
      {reviewUsers.map((reviewUser, key) => (
        <Card key={key} {...reviewUser} />
      ))}
    </section>
  );
};
export default CardGrid;
