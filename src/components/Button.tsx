type Props = {
  text: string;
};

export const Button = ({ text }: Props): JSX.Element => {
  return (
    <button
      className="bg-black bg-opacity-60 py-2 px-10 text-center"
      type="button"
    >
      <span className="leading-none text-white">{text}</span>
    </button>
  );
};
