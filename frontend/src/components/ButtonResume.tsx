import React from 'react';

const ButtonResume: React.FC = () => {
  const handleDownload = () => {
    window.open("/pdf/Rafael_Brandao_CV _May.pdf", '_blank');
  };

  return (
    <button onClick={handleDownload} className='btn btn-black'>
      Download Resume
    </button>
  );
};

export default ButtonResume;
