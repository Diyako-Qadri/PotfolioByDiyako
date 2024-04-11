import { MySkills } from '../../data/data';

import { getImageURL } from '../../utils/function';
import styles from './SkillsPage.module.css';

const SkillsPage = () => {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsCradFlex}>
        {MySkills.map((skill, index) => (
          <div className={styles.skillsCard} key={index}>
            <img
              className={styles.skillsImage}
              src={getImageURL(skill.image)}
              alt={skill.name}
            />
            <div className={styles.skillsDescription}>
              <h2>{skill.name}</h2>
              <h5>{skill.descriptions}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
