import { useRef } from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import { Product } from '../../utils/modals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({ items }: { items: Array<Product> }) {
	type SliderRefType = {
		slickPrev: () => void;
		slickNext: () => void;
	};
	const sliderRef = useRef<SliderRefType>(null);

	const next = () => {
		sliderRef.current?.slickNext();
	};

	const previous = () => {
		sliderRef.current?.slickPrev();
	};

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    console.log('clicked from carousel')
  }

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 930,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div
			className="carousel"
			onClick={handleMouseDown}
		>
			<button className="carousel-left carousel-btn" onClick={previous}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-chevron-left"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
					/>
				</svg>
			</button>
			<Slider ref={sliderRef} {...settings}>
				{items.map((product: any) => {
					return <Card key={product.id} {...product} />;
				})}
			</Slider>
			<button className="carousel-right carousel-btn" onClick={next}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-chevron-right"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</button>
		</div>
	);
}
