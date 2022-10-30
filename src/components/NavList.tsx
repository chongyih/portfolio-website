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
    <nav className="item-center fixed right-10 bottom-20 z-10 hidden flex-col justify-center md:flex">
      <ul>
        {props.components?.map((component, index) => {
          return (
            <li
              key={index}
              className="mb-5 flex list-none items-center justify-center"
            >
              <button
                className={`transition duration-200 ${
                  isIntersecting[index]
                    ? "h-4 w-4 border-2 bg-transparent"
                    : "h-3 w-3 rotate-45 bg-black"
                }`}
                onClick={() =>
                  refs?.current[index].scrollIntoView({ behavior: "smooth" })
                }
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

NavList.displayName = "NavList";

export default NavList;
