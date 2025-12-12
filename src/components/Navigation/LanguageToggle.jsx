import './LanguageToggle.css';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            <span className={`lang-option ${language === 'es' ? 'active' : ''}`}>ES</span>
            <span className="separator">/</span>
            <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        </button>
    );
};

export default LanguageToggle;
