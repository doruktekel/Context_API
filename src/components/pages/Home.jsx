import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme} `}>
      <div className="container-child">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime in
            similique expedita harum alias. Nesciunt aliquam at adipisci quae,
            facere magni in eum totam corrupti commodi perferendis officia ullam
            fuga accusamus quod praesentium nam architecto tempore magnam veniam
            alias debitis labore! Odit nihil vitae veniam, magnam pariatur
            placeat velit aperiam.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
            alt=""
          />
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime in
            similique expedita harum alias. Nesciunt aliquam at adipisci quae,
            facere magni in eum totam corrupti commodi perferendis officia ullam
            fuga accusamus quod praesentium nam architecto tempore magnam veniam
            alias debitis labore! Odit nihil vitae veniam, magnam pariatur
            placeat velit aperiam.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
            alt=""
          />
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime in
            similique expedita harum alias. Nesciunt aliquam at adipisci quae,
            facere magni in eum totam corrupti commodi perferendis officia ullam
            fuga accusamus quod praesentium nam architecto tempore magnam veniam
            alias debitis labore! Odit nihil vitae veniam, magnam pariatur
            placeat velit aperiam.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
            alt=""
          />
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime in
            similique expedita harum alias. Nesciunt aliquam at adipisci quae,
            facere magni in eum totam corrupti commodi perferendis officia ullam
            fuga accusamus quod praesentium nam architecto tempore magnam veniam
            alias debitis labore! Odit nihil vitae veniam, magnam pariatur
            placeat velit aperiam.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
