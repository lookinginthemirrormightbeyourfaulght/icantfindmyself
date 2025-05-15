import { NavButton } from "../modules/NavBtn/NavButton";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <NavButton to="/funny" text="wanna play a game?" />
      <div className="right"></div>
    </div>
  );
};
