import Image from "next/image";
import { forwardRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { ComponentsI } from "../pages";

interface Props {
  components: ComponentsI[];
}
type Ref = HTMLElement[];

const NavList = forwardRef<Ref, Props>((props, refs: any) => {
  const isIntersecting = useOnScreen(refs);

  return (
    <nav className="item-center fixed bottom-20 right-20 flex flex-col justify-center">
      <ul>
        {props.components?.map((component, index) => {
          return (
            <li
              key={index}
              className="mb-5 flex list-none items-center justify-center"
            >
              <button
                className={`bg-black transition duration-200 ${
                  isIntersecting[index]
                    ? "h-4 w-4 border-2 bg-transparent"
                    : "h-3 w-3 rotate-45"
                }`}
                onClick={() =>
                  refs?.current[index].scrollIntoView({ behavior: "smooth" })
                }
              />
            </li>
          );
        })}
      </ul>
      <Image
        className={`${!isIntersecting[0] ? "!hidden" : ""} animate-bounce`}
        src="/image/ArrowDown.svg"
        alt="arrow-down"
        width="30px"
        height="30px"
      />
    </nav>
  );
});

NavList.displayName = "NavList";

export default NavList;
