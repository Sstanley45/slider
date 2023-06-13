import React from 'react';
import LoremIpsum from "lorem-ipsum";

const LoremIpsumComponent = () => {
  const paragraphs = LoremIpsum({
    count: 3,
    units: "paragraphs",
  });

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LoremIpsumComponent ;