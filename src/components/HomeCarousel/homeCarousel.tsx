import React from 'react';
import Carousel from 'react-material-ui-carousel';
import HomeCarouselItem from './homeCarouselItem.tsx';
import Image1 from '../../images/imgBackGround.jpg';
import Image2 from '../../images/ImgBackGround2.jpg';
import Image3 from '../../images/ImgBackGround3.jpg';

interface IProps{

}

export default function HomeCarousel(props:IProps){

    var items = [
        {
            img: Image1,
            description: "Slide1"
        },
        {
            img: Image2,
            description: "Slide2"
        },
        {
            img: Image3,
            description: "Slide3"
        }
    ]

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysInvisible={true}
            duration={700}
            interval={4000}
            sx={{
                position:'relative',
                maxHeight:{xs:'200px',sm:'800px'}
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
                    color:'#000',
                    backgroundColor:'#fff',
                    borderColor:'#fff',
                    padding:0,
                    height:'13px',
                    width:'13px',
                }
            }}>
            {
                items.map( (item, i) => <HomeCarouselItem key={i} item={item} {...item}/> )
            }
        </Carousel>
    )
}
