import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import mycss from './mycss.module.css'


function Slider(){
    return(
    <div>
    <Carousel variant="dark">
  <Carousel.Item>
   <img className={mycss.slider} src={require('./img/slider1.jpg')}></img>
  </Carousel.Item>
  <Carousel.Item>
   <img className={mycss.slider} src={require('./img/slider2.jpg')}></img>
  </Carousel.Item>
  <Carousel.Item>
   <img className={mycss.slider} src={require('./img/slider3.jpg')}></img>
  </Carousel.Item>
  <Carousel.Item>
   <img className={mycss.slider} src={require('./img/slider4.jpg')}></img>
  </Carousel.Item>
  <Carousel.Item>
   <img className={mycss.slider} src={require('./img/slider5.jpg')}></img>
  </Carousel.Item>
</Carousel>
    </div>

    )
}

export default Slider;