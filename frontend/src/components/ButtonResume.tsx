import React from 'react';
import { useTranslation } from 'react-i18next';

const ButtonResume: React.FC = () => {
  const { t } = useTranslation();
  const handleDownload = () => {
    window.open("/pdf/Rafael_Brandao_CV _May.pdf", '_blank');
  };

  return (
    <button onClick={handleDownload} className='btn btn-black'>
      {t('button.download')}
    </button>
  );
};

export default ButtonResume;
