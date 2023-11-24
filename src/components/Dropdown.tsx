export type Options = {
  label: string;
  value: string;
};

type Props = {
  options: Options[];
};

export const Dropdown = ({ options }: Props): JSX.Element => {
  const selectables = options.map((option: Options) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });
  return (
    <form>
      <div>
        <select>{selectables}</select>
      </div>
    </form>
  );
};
