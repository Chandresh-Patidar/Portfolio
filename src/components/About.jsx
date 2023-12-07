import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Service Card
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
const About = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Body */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='empty-4 text-secondary text-[17px] leading-[30px] text-justify mt-10'
      >
        Greetings! I am an experienced front-end developer with a dedicated
        5-year journey in crafting seamless, user-centric digital experiences.
        Proficient in technologies like React, Next.js, Svelte, and various
        styling tools, my focus is on transforming concepts into captivating
        interfaces. I bring mastery in Redux, TypeScript, GraphQL, and efficient
        API integration to the table. Committed to collaboration, code quality,
        and continual growth, I contribute to a diverse range of projects.
        Passionate about data visualization and performance optimization, I am
        eager for new challenges in front-end development. Let's connect and
        bring your ideas to life!
      </motion.p>

      {/* Service Card */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
