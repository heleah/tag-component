import styled from 'styled-components';
import { useState } from 'react';

export default function Tags({ tags, onUpdateTags, handleRemoveTag }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tag);
      setTag('');
    } else if (tag.length === 0 && event.key === 'Backspace') {
      handleRemoveTag(tags.pop());
    }
  }

  return (
    <TagWrapper>
      <label htmlFor="tag_input">Enter Tags</label>
      <TagCloud>
        {tags.map((tag, index) => (
          <span key={index + tag}>
            {tag}{' '}
            <button type="button" onClick={() => handleRemoveTag(tag)}>
              ⓧ
            </button>
          </span>
        ))}
        <input
          type="text"
          name="tag_input"
          value={tag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Write here..."
        />
      </TagCloud>
    </TagWrapper>
  );
}

const TagWrapper = styled.section`
  display: grid;
  font-family: sans-serif;
`;

const TagCloud = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  width: 28rem;
  margin: 0.3rem;
  border: 1px solid #270f43;
  border-radius: 8px;
  padding: 0.6rem;

  span {
    position: relative;
    padding: 0.4rem;
    padding-right: 1.4rem;
    border-radius: 10px;
    background-color: lavender;
    color: #270f43;

    button {
      position: absolute;
      top: 0;
      background-color: transparent;
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
  }

  input {
    height: 1.5rem;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

/*
APP.JS
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

*/
