import { useRef } from 'react';
import Slider from 'react-slick';
import Card from '../common/Card';
import { ProductType } from '../../utils/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({ items }: { items: Array<ProductType> }) {

	const sliderRef = useRef(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		draggable: false,
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
		<div className="carousel">
			<Slider ref={sliderRef} {...settings}>
				{items.map((product: ProductType) => {
					return <Card key={product.id} {...product} />;
				})}
			</Slider>
		</div>
	);
}
