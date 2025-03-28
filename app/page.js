'use client'
import Image from "next/image";
import styles from "./page.module.css";
import projstyles from './componets/projects/project.module.css'
import Button from "./componets/button/button";
import { store} from "./state/store";
import { useEffect,useState } from "react";
import Project from "./componets/projects/project";
import Span from "./componets/heading/span";


export default function Home() {

  let [links,setLinks]=useState('light');
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    setLinks(isDark ? "dark" :"light")
    return () => {
    };
  }, [links,isDark]);

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      } else {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      
      return () => {
        
      };
    }, []);
  
    const toggleTheme = ()=>{
      const newTheme = !isDark ? 'dark' : 'light';
      setIsDark(!isDark);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark',!isDark)
    };
  return (
    <div className={styles.page}>
      <store.Provider value={store}>
        <header className={styles.header}>
          <Button stateupdate={toggleTheme}text='Change color scheme'/>
        </header>
        <section className={styles.landing}>
          <h1 className={`${styles.mainHeader} ${styles.headings}`}>Hi, Im <Span text={store._currentValue.heading.names}delay={11000}/> I'm a <Span text={store._currentValue.heading.roles}delay={6000}/> from <Span text={store._currentValue.heading.locations}delay={15000}/>.</h1>
        </section>
        <section className={styles.projects}>
          <h2 className={`${styles.projectsHeading} ${styles.headings}`}>Here are some of my works</h2>
            <section className={styles.projectcards}>
              {
                store._currentValue.projects.map((project,index)=>{
                  return (
                    <Project 
                      key={index}
                      heading={project.projname}
                      description={project.projdescr}
                      tech={project.projtech}
                      url={project.projurl}
                      vidsrc={project.projvid}
                    />
                  )
                })
              }
              <div className={`${projstyles.container} ${projstyles.morework}`}>
                <a className={projstyles.link}href="https://github.com/DMK980"target="_blank">{'< More Work >'}</a>
              </div>
            </section>
        </section>
        <section className={styles.contact}>
          <h2 className={`${styles.contactHeading} ${styles.headings}`}>If you like my work contact me.</h2>
          <section className={styles.largelinks}>
            {
              store._currentValue.socialLinks.map((sociallink,index)=>{
                return (
                  <a key={index}className={styles.linkicons}href={sociallink.linkhref}target="_blank">
                    <Image 
                      src={`/${links}_${sociallink.linkname}.svg`} 
                      alt={sociallink.linkname}
                      width={190}
                      height={190}
                    />
                  </a>
                )
              })
            }   
          </section>
        </section>
      </store.Provider>
    </div>
  );
}
