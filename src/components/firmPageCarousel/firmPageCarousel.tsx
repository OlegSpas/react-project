import React from 'react';
import Carousel from 'react-material-ui-carousel';
import FirmPageCarouselItem from '../firmPageCarousel/firmPageCarouselItem.tsx';
import FirmHeroImg1 from '../../images/firmHeroBackground.jpg';
import FirmHeroImg2 from '../../images/firmHeroBackground2.jpg';
import FirmHeroMobileImg1 from '../../images/firmHeroMobileBackground.jpg';
import FirmHeroMobileImg2 from '../../images/firmHeroMobileBackground2.jpg';


interface IProps{

}

export default function FirmPageCarousel(props:IProps){

    var items = [
        {
            img: FirmHeroImg1,
            title:'Our story',
            subTitle:'Boutique Experience Since 2004',
            description: "We brought together six entrepreneurial founding partners with investment, operating and leadership expertise from distinguished organizations.",
            person:'Tom Murphy, Co-Founder & Partner',
            mobImage: FirmHeroMobileImg1
        },
        {
            img: FirmHeroImg2,
            title:'Our story',
            subTitle:'Boutique Experience Since 2004',
            description: "We brought together six entrepreneurial founding partners with investment, operating and leadership expertise from distinguished organizations.",
            person:'Barry Volpert, Co-Founder & CEO',
            mobImage: FirmHeroMobileImg2
        },
    ]

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysInvisible={true}
            duration={700}
            interval={5000}
            sx={{
                position:'relative',
                maxHeight:{xs:"500px", sm:'650px',md:'800px'},
            }}
            indicatorContainerProps={{
                style: {
                    position:'absolute',
                    top:'85%',
                    zIndex:3,
                    left:'10%',
                    width:'auto', 
                } 
            }}
            indicatorIconButtonProps={{
                style: {   
                    color: '#fff',      
                    height:'4px',
                    width:'4px',
                    margin: 10,
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    border:'1px solid #fff',
                    color:"#000",
                    padding:0,
                    height:'13px',
                    width:'13px',
                }
            }}
        >
            {
                items.map( (item, i) => <FirmPageCarouselItem key={i} item={item} {...item}/> )
            }
        </Carousel>
    )
}
