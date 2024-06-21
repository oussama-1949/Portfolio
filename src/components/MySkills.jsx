import React from "react";

export default function MySkills() {
  const skills = [
    "html.png", "tailwind.png", "figma.png", "javascript.png",
    "mongo.png", "node.png", "photoshop1.png",
    "react.png", "illustrator.png"
  ];

  return (
    <div className="flex justify-end ">
      <div className="text-left">
        <div className="font-customRegular text-first text-4xl">MySkills</div>
        <div className="mt-8 font-MyThin text-first text-xl capitalize">
          Technologies I've been working with recently
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-first rounded-lg shadow-lg p-4 flex justify-center items-center"
            >
              <img
                src={skill}
                alt={skill.replace('.png', '')}
                className="w-12 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
