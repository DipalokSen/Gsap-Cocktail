import React from 'react'
import { navLinks } from '../../Constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) // make sure you register the plugin

const Navbar = () => {
  useGSAP(() => {
    const navTweens = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTweens.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)', // corrected: it's "backdropFilter", not "backgroundFilter"
        duration: 1, // corrected: duration is a number, not string
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex justify-center items-center gap-2">
          <img src="images/logo.png" alt="" />
          <p>velvet pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
