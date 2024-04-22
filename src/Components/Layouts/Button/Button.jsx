const Button = ({buttonText}) => {
  return (
    <div>
      <button className="border border-[#31F6FC] px-4 py-1 rounded-full font-light text-white">
        {buttonText}
      </button>
    </div>
  );
};
export default Button;
