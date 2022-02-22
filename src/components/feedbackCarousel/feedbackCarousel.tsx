import React from 'react';
import Carousel from 'react-material-ui-carousel';
import FeedbackCarouselItem from '../feedbackCarousel/feedbackCarouselItem.tsx';
import FeedbackImg1 from '../../images/feedBackPhoto.jpg';
import FeedbackImg2 from '../../images/feedBackPhoto2.jpg';
import FeedbackImg3 from '../../images/feedBackPhoto3.jpg';
import FeedbackImg4 from '../../images/feedBackPhoto4.jpg';
import FeedbackMobileImg1 from '../../images/feedBackPhotoMob.jpg';
import FeedbackMobileImg2 from '../../images/feedBackPhotoMob2.jpg';
import FeedbackMobileImg3 from '../../images/feedBackPhotoMob3.jpg';
import FeedbackMobileImg4 from '../../images/feedBackPhotoMob4.jpg';


interface IProps{

}

export default function FeedbackCarousel(props:IProps){

    var items = [
        {
            img: FeedbackImg1,
            description: "We could not have picked a better firm to partner with for the appropriate outlook, clear expectations and unwavering support.",
            person:'Gene Taylor, Former Chairman & CEO, Capital Bank Financial',
            mobImage: FeedbackMobileImg1
        },
        {
            img: FeedbackImg2,
            description: "Crestview had the experience, resourcefulness and perseverance to execute a complex transaction.",
            person:'Gareth Williams, Former CEO, Interoute Communications',
            mobImage: FeedbackMobileImg2
        },
        {
            img: FeedbackImg3,
            description: "They work hard to align their focus with management’s objectives.",
            person:'Mike DuBose, Former Executive Chairman and Co-CEO, JR Automation',
            mobImage: FeedbackMobileImg3
        },
        {
            img: FeedbackImg4,
            description: " Crestview understands our industry. With their strategic and operational support, we turned a U.S. leader into a global leader.",
            person:'Gareth Williams, Former CEO, Interoute Communications',
            mobImage: FeedbackMobileImg4
        }
    ]

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysInvisible={true}
            duration={700}
            interval={3000}
            sx={{
                position:'relative',
                maxHeight:{xs:"400px", sm:'650px',md:'600px'},
                height:{sm:'100vh'}     
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
                items.map( (item, i) => <FeedbackCarouselItem key={i} item={item} {...item}/> )
            }
        </Carousel>
    )
}
