import { FC } from "react";

import { useSwiper } from "swiper/react";

import classes from "./styles.module.scss";

interface Props {
  onHidePrevButton: () => void;
}

const NextButton: FC<Props> = ({ onHidePrevButton }) => {
  const swiper = useSwiper();

  return (
    <button
      className={classes.buttonNext}
      onClick={() => {
        onHidePrevButton();
        swiper.slideNext();
      }}></button>
  );
};

export default NextButton;
