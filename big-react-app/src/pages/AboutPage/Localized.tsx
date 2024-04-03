import { useTranslation } from "react-i18next";

const Localized: React.FC = () => {
  // Refer App.tsx for i18n setup -- MUST
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (targetLanguage: string) => {
    console.log(targetLanguage);
    i18n.changeLanguage(targetLanguage);
  };

  return (
    <div>
      <h2>You are seeing i18n and l10n here</h2>
      <p>The following texts will appear in different languages</p>
      <hr />
      <h4>{t("welcome")}</h4>
      <h4>{t("intro")}</h4>

      <div>
        <button
          className="btn btn-warning"
          onClick={() => handleChangeLanguage("en")}
        >
          English (i18n)
        </button>
        <button
          className="btn btn-warning"
          onClick={() => handleChangeLanguage("fr")}
        >
          French (i18n)
        </button>
        <button
          className="btn btn-warning"
          onClick={() => handleChangeLanguage("en-AU")}
        >
          Australian English (l10n)
        </button>
      </div>
    </div>
  );
};

export default Localized;
