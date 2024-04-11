import styles from './RightSideContent.module.css';

const RightSideContent = () => {
  return (
    <div className={styles.rightContainer}>
       <div className={styles.theHeader}>
        <p></p>
        <p></p>
        <p></p>
       </div>
      <div className={styles.codeContent}>
        
        {`const coder = `}
        <br />{`name: "Diyako",`} <br />
        {`skills: ["React", "Node", "NextJS", "Git", "Express", "MongoDB", "npm", "HTML", "CSS", "Figma"],`}{' '}
        <br />{`hardWorker: true,`} <br />{`quickLearner: true,`} <br />
        {`problemSolver: true,`} <br />${`seekingInternship: function() {`}{' '}
        <br />{`if (this.skills.length >= 6) {`} <br />
        {`return this.hardWorker && this.quickLearner && this.problemSolver && "available: January 2025 for internship";`}{' '}
        <br />{` } else {`} <br />{`return false;`} <br />{`}`} <br />{`};`}{' '}
     
      </div>
    </div>
  );
};

export default RightSideContent;
