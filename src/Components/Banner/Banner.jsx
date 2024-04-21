import React from 'react';
import background from '../../assets/all_Img/etcMetarial/bol-bg.png';

const Banner = () => {
  return (
    <div>
      <div className='h-96'
        style={{
          backgroundImage: `url(${background})`, // Corrected style syntax
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, excepturi iste. Harum sequi ipsum eum, ex deleniti aperiam optio blanditiis ullam ab quos inventore officiis temporibus ea aliquam animi itaque quas, omnis quae ratione voluptatibus dolore ut consectetur. Ipsum officiis explicabo maxime rerum dolores quam odio tempore minus, nesciunt, qui aliquid nihil. Deserunt deleniti, minus, atque consectetur enim obcaecati, veritatis error fugit sit quasi rerum quaerat commodi tenetur adipisci maxime? Minima asperiores eaque qui, atque ullam temporibus ex eum reprehenderit ipsa reiciendis quidem magni distinctio eius, quam corrupti sapiente obcaecati est quia iste ratione nostrum dolorum exercitationem et minus? Odit?
        </p>
      </div>
    </div>
  );
};

export default Banner;
