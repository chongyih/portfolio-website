import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import NavList from "../components/NavList";
import Project from "../components/Project";
import Skills from "../components/Skills";

export interface ComponentsI {
  id: string;
  element: JSX.Element;
}

const Home: NextPage = () => {
  const refs = useRef<HTMLElement[]>([]);

  const componentsToRender: ComponentsI[] = [
    {
      id: "about",
      element: <About />,
    },
    {
      id: "education",
      element: <Education />,
    },
    {
      id: "experience",
      element: <Experience />,
    },
    {
      id: "project",
      element: <Project />,
    },
    {
      id: "skills",
      element: <Skills />,
    },
    {
      id: "contact",
      element: <Contact />,
    },
  ];

  return (
    <>
      <Head>
        <title>Chua Chong Yih</title>
        <meta
          name="description"
          content="Aspiring developer from Singapore looking to explore new technologies."
        />
      </Head>

      <main className="no-scrollbar h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-slate-300">
        <NavList components={componentsToRender} ref={refs} />
        {componentsToRender.map((component, index) => {
          return (
            <section
              key={component.id}
              ref={(ref) => ref && (refs.current[index] = ref)}
              id={component.id}
              className={`snap-start ${
                component.id === "contact"
                  ? "min-h-screen snap-always sm:snap-none lg:h-screen"
                  : "h-screen snap-always"
              }`}
            >
              {component.element}
            </section>
          );
        })}
      </main>
    </>
  );
};

export default Home;
