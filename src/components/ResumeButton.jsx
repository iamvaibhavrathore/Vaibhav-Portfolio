import React from 'react';
import { SectionWrapper } from '../hoc';

const ResumeButton = () => {
  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1EXS4PEB3GgE8MZgPGNm0sJZ1CdSYt9tB/view?usp=drive_link';
  };

  return (
    <div
      onClick={handleDownload}
      className=" text-white font-bold py-2 px-4 rounded-full border-2 border-[#915EFF] hover:bg-[#915EFF] select-none backdrop-blur-lg transition duration-300"
      
    >
        <Link to="#resume"></Link>
      Resume
    </div>
  );
};

export default SectionWrapper(ResumeButton, "resume");
