import { FC } from "react";

import { useSwiper } from "swiper/react";

import classes from "./styles.module.scss";

interface Props {
  onHideNextButton: () => void;
}

const PrevButton: FC<Props> = ({ onHideNextButton }) => {
  const swiper = useSwiper();

  return (
    <button
      className={classes.buttonPrev}
      onClick={() => {
        onHideNextButton();
        swiper.slidePrev();
      }}></button>
  );
};

export default PrevButton;
