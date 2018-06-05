import React, { Component } from 'react'
import './home.css'
import Swiper from 'swiper/dist/js/swiper.min.js'

class HomePage extends Component {
	componentDidMount () {
		var mySwiper = new Swiper('.swiper-container',{
		  pagination: {
		    el: '.swiper-pagination',
		  },
		  uniqueNavElements: false,
		  autoplay: true,
		  loop: true
		})
	}
	render () {
		return (
			<div className="home-page">
				<div className="swiper-container lub">
				  <div className="swiper-wrapper">
				    <div className="swiper-slide"><img src="https://public.wutongwan.org/public-20180428-FpXXLHtlZo8TCYTQpw8MrljAqhCJ" /></div>
				    <div className="swiper-slide"><img src="https://public.wutongwan.org/public-20180409-FqC8ZLZYOUlB9zGzr2bYK2OV2iR1" /></div>
				    <div className="swiper-slide"><img src="https://public.wutongwan.org/public-20180510-FrteOPLhNQBT3lfMpY7jFoX_K_Dt" /></div>
				    <div className="swiper-slide"><img src="https://public.wutongwan.org/public-20171215-FjlogVtewxHyNQLNLZ9DgRW5wDPw" /></div>
				    <div className="swiper-slide"><img src="https://public.wutongwan.org/public-20180417-FkCF0G8xvTIGH087dRdJYAeiLeEA" /></div>
				  </div>
				  <div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}

export default HomePage