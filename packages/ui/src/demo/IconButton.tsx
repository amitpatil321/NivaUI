import { HomeIcon } from "lucide-react";
import Button from "../components/atoms/Button";

function IconButton() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 pt-12">
        <Button kind={"icon"}>
          <HomeIcon />
        </Button>
        <Button kind={"icon"} size={"sm"}>
          <HomeIcon />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-2 pt-12">
        <Button kind={"icon"} variant={"neutral"}>
          <HomeIcon />
        </Button>
        <Button kind={"icon"} variant={"neutral"} size={"sm"}>
          <HomeIcon />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-2 pt-12">
        <Button kind={"icon"} variant={"subtle"}>
          <HomeIcon />
        </Button>
        <Button kind={"icon"} variant={"subtle"} size={"sm"}>
          <HomeIcon />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-2 pt-12">
        <Button kind={"icon"} disabled>
          <HomeIcon />
        </Button>
        <Button kind={"icon"} size={"sm"} disabled>
          <HomeIcon />
        </Button>
      </div>
    </>
  );
}

export default IconButton;
