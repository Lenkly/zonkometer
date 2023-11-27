import { useState } from "react";
import styles from "./Form.module.css";
import { Results } from "./Results";

export type Options = {
  label: string;
  value: string;
  zonks: number;
};

type Props = {
  options: Options[];
};

export const Form = ({ options }: Props): JSX.Element => {
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    if (showResults == true) {
      setShowResults(false);
    } else {
      setShowResults(true);
      hitTheButton("zonk-sound.mp3");
    }
  };

  const hitTheButton = (url: string) => {
    new Audio(url).play();
  };

  const selectables = options.map((option: Options) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <>
      {!showResults ? (
        <div className={styles.zonkForm}>
          <form>
            <div style={{ display: "flex", marginBottom: "90px" }}>
              <p style={{ marginRight: "20px", fontSize: "20px" }}>
                Wer verdient einen Zonk?
              </p>
              <select>{selectables}</select>
            </div>
            <button
              className={styles.hitButton}
              onClick={() => toggleResults()}
              type="submit"
            >
              ZONK!
            </button>
          </form>
          <button
            className={styles.againButton}
            onClick={() => toggleResults()}
            style={{ marginTop: "50px" }}
          >
            Ich bin nur für die Ergebnisse hier.
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Results />
          <button
            className={styles.againButton}
            onClick={() => toggleResults()}
          >
            Ich verteile noch nen Zonk! &rarr;
          </button>
        </div>
      )}
    </>
  );
};
