import { LastBtn } from "../modules/LastBtn/LastButton";
import { Header } from "../Pages/Header";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content content-first">для чего все это?</div>
      <div className="content content-second">почему я хочу этого?</div>
      <div className="content content-third">
        я чувствую на себе чужие взгляды
      </div>
      <div className="content content-fourth">
        не смотрите не смотрите не смотрите не смотрите не смотрите не смотрите
        не смотрите не смотрите не смотрите не смотрите не смотрите не смотрите
        еще чуток полистать бы
      </div>
      <div className="content content-fifth">для чего я?</div>
      <div className="content content-six">я счастлив?</div>
      <div className="content content-seven">я не верю себе</div>
      <div className="content content-eight">я не верю никому</div>
      <div className="content content-nine">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=0gcJCdgAo7VqN5tD">
          могила меня украсит
        </a>
      </div>
      <LastBtn />

      <p>
        вдруг забуду где лежит:
        https://github.com/lookinginthemirrormightbeyourfaulght/icantfindmyself
      </p>
    </>
  );
};
