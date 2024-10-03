type Props = {
  actualTheme: boolean;
  setTheme: () => void;
}

export const ButtonTheme = ({ actualTheme, setTheme }: Props) => {
  return (
    <button
    onClick={setTheme}
    className={`p-3 rounded-xl m-3 hover:opacity-80`}>ButtonTheme</button>
  )
}


