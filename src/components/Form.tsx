import styles from "../app/page.module.css";

export type Options = {
  label: string;
  value: string;
};

type Props = {
  options: Options[];
};

export const Form = ({ options }: Props): JSX.Element => {
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
    <div className={styles.zonkForm}>
      <form>
        <div style={{ display: "flex", marginBottom: "70px" }}>
          <p style={{ marginRight: "20px" }}>Wer verdient einen Zonk?</p>
          <select>{selectables}</select>
        </div>
        <button
          className={styles.hitButton}
          onClick={() => hitTheButton("zonk-sound.mp3")}
          type="submit"
        >
          ZONK!
        </button>
      </form>
    </div>
  );
};
