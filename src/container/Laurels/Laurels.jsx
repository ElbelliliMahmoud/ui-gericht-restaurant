import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Laurels.css';

const Laurels = () => {

  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award_image" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{color : '#DCCA87'}}>{title}</p>
        <p className="p__cormorant" >{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h2 className='headtext__cormorant'>Our Laurels</h2>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" /></div>
    </div>
  );
}

export default Laurels;
