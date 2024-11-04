import { useGetChannelByIdQuery } from "@/shared/store/api";
import { Channel, User } from "@/shared/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type ContextProps = {
  channelData?: Channel<User>;
  isLoading: boolean;
  isFetching: boolean;
};

export const ChannelContext = createContext<ContextProps>({
  isLoading: true,
  isFetching: false,
});

export const ChannelContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { data: channelData, error: channelError, isLoading, isFetching } = useGetChannelByIdQuery({
    id: Number(id),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!channelError) return;

    toast.error("Ошибка");

    navigate("/");
  }, [channelError, navigate]);

  return <ChannelContext.Provider value={{channelData, isLoading, isFetching}}>{children}</ChannelContext.Provider>;
};
