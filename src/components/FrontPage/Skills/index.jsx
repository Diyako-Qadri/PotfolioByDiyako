// Import useEffect hook
import { MySkills } from '../../../data/data';
import styles from './Skills.module.css';
import { getImageURL } from '../../../utils/function';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>
        <p>Skills</p>
      </div>
      <div className={styles.skillsContent}>
        <div className={styles.skillsBar}>
          {MySkills.map((skill, index) => (
            <div className={styles.skills} key={index}>
              <img src={getImageURL(skill.image)} alt={skill.name} />
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
        <div className={styles.skillsBar}>
          {MySkills.map((skill, index) => (
            <div className={styles.skills} key={index}>
              <img src={getImageURL(skill.image)} alt={skill.name} />
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
