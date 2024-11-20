type Props = {
  actualTheme: boolean;
  setTheme: () => void;
};

export const ButtonTheme = ({ setTheme }: Props) => {
  return (
    <button
      onClick={setTheme}
      className={`m-3 rounded-xl p-3 hover:opacity-80`}
    >
      ButtonTheme
    </button>
  );
};
