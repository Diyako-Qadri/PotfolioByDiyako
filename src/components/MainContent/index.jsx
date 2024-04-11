import RightSideContent from './RightSideContent';
import LeftSideContent from './LeftSideContent';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <section className={styles.MainContent}>
      <LeftSideContent/>
      <RightSideContent />
    </section>
  );
};

export default MainContent;
