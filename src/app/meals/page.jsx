import Meal from "@/components/Meal";
import styles from './styles.module.css'

export const metadata = {
    title: {absolute: 'Meals'},
    description: "search your meals",
  };

const MealPage = () => {
    return (
        <div>
           <h1 className={styles.large_text}>Choose Your Meals</h1>
           <Meal></Meal>
        </div>
    );
};

export default MealPage;