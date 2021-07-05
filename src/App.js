import { useState } from 'react';
import Tags from './Tags';

function App() {
  const [skills, setSkills] = useState([]);

  function updateSkills(newSkill) {
    setSkills([...skills, newSkill.toUpperCase()]);
  }

  function removeSkill(skillToRemove) {
    const remaining = skills.filter((skill) => skill !== skillToRemove);
    setSkills(remaining);
  }

  return (
    <form>
      <Tags
        tags={skills}
        onUpdateTags={updateSkills}
        handleRemoveTag={removeSkill}
      />
    </form>
  );
}

export default App;
