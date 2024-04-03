import "./CustomButton.scss";
interface CustomButtomProps {
  icon: string;
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtomProps> = ({ icon, text, onClick }) => {
  return (
    <>
      <button
        className="custom-btn"
        onClick={onClick}
      >
        <i className={`icon ${icon}`}></i>
        <p className="text">{text}</p>
      </button>
    </>
  );
};
export default CustomButton;
