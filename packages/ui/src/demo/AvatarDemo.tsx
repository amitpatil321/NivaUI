import { User } from "lucide-react";
import Avatar from "../components/atoms/Avatar/Avatar";

const AvatarDemo = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-4">
        <Avatar size="sm" icon={<User />} />
        <Avatar icon={<User />} />
        <Avatar size="lg" icon={<User />} />
      </div>
      <div className="flex justify-center items-center gap-4 pt-4">
        <Avatar shape={"square"} size="sm" icon={<User />} />
        <Avatar shape={"square"} icon={<User />} />
        <Avatar shape={"square"} size="lg" icon={<User />} />
      </div>
      <div className="flex justify-center items-center gap-4 pt-4">
        <Avatar
          size="sm"
          src="https://randomuser.me/api/portraits/men/11.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/12.jpg" />
        <Avatar
          size="lg"
          src="https://randomuser.me/api/portraits/men/13.jpg"
        />
      </div>
      <div className="flex justify-center items-center gap-4 pt-4">
        <Avatar
          shape={"square"}
          size="sm"
          src="https://randomuser.me/api/portraits/men/11.jpg"
        />
        <Avatar
          shape={"square"}
          src="https://randomuser.me/api/portraits/men/12.jpg"
        />
        <Avatar
          shape={"square"}
          size="lg"
          src="https://randomuser.me/api/portraits/men/13.jpg"
        />
      </div>
      <div className="flex justify-center items-center gap-4 pt-4">
        <Avatar size={"sm"}>AP</Avatar>
        <Avatar>A</Avatar>
        <Avatar shape={"square"}>AP</Avatar>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pt-10">
        <Avatar.Group layout="spaced">
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
        </Avatar.Group>
        <Avatar.Group layout="overlap">
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>E</Avatar>
          <Avatar>F</Avatar>
        </Avatar.Group>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pt-10">
        <Avatar.Group layout="spaced">
          <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/22.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/23.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/24.jpg" />
        </Avatar.Group>
        <Avatar.Group layout="overlap">
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/41.jpg"
          />
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/42.jpg"
          />
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/43.jpg"
          />
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <Avatar
            size="lg"
            src="https://randomuser.me/api/portraits/men/45.jpg"
          />
        </Avatar.Group>
      </div>
    </>
  );
};

export default AvatarDemo;
