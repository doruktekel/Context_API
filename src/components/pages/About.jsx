import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            laudantium inventore aperiam quas deserunt? Reprehenderit recusandae
            beatae natus asperiores illum!
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            repellat, nesciunt quaerat nostrum, qui illum officiis placeat porro
            ipsam saepe architecto fugit consequatur reprehenderit assumenda
            dolore? Quae dolores laboriosam iste, quo dolore amet ipsa.
            Repellendus ipsum ex alias in labore ipsam. Facere, vitae provident
            mollitia, consequatur odit inventore ducimus sed cumque beatae
            similique alias aspernatur laboriosam quod voluptates quidem itaque,
            quis blanditiis suscipit dolore placeat sapiente. Esse omnis,
            praesentium earum nihil natus possimus saepe! Quis autem cupiditate
            iste modi aliquid quia consequuntur voluptate enim magni explicabo
            vitae ducimus perspiciatis ad sit sequi libero doloremque
            necessitatibus quaerat tenetur, voluptates aliquam, dolorem hic
            laborum! Aperiam et eos, minus distinctio esse quidem ipsam quod,
            sit, quo voluptate delectus? Amet, recusandae dicta. Aperiam
            ducimus, consectetur distinctio quibusdam similique magni id minus
            exercitationem est voluptas optio qui eligendi ut beatae eaque
            fugiat. Ad porro molestias voluptatibus nisi reiciendis aliquid
            asperiores minima explicabo a hic quam sapiente saepe, recusandae
            optio. Voluptas nulla, quos quaerat amet commodi laborum! Ad vero
            quam voluptates laborum distinctio, ipsa culpa hic amet soluta
            aliquam vel! At obcaecati dolores accusamus, sit similique tempora
            nobis perspiciatis nam necessitatibus delectus molestiae quas rem
            facere quos. Libero, nemo! Eum officiis, asperiores nobis quibusdam
            minus temporibus!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
