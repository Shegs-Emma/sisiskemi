import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const HeroCarousel = () => {
  return (
    <div>
      <Splide
        hasTrack={false}
        aria-label='sisik collection carousel'
        tag='section'
      >
        <SplideTrack>
          <SplideSlide>...</SplideSlide>
        </SplideTrack>

        <div className='splide__progress'>
          <div className='splide__progress__bar' />
        </div>

        {/* <button class="splide__toggle" type="button">
 	  <span class="splide__toggle__play">Play</span>
 	  <span class="splide__toggle__pause">Pause</span>
  </button> */}
      </Splide>
    </div>
  );
};

export default HeroCarousel;
