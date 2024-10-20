import { Message } from "@/components/ui";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";

export const Messages: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={cn(
        "px-6 py-4 overflow-y-auto flex flex-col flex-grow max-h-[calc(100dvh-160px)] lg:w-full",
        className
      )}
    >
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
      <Message
        position="right"
        message="Привет, лох"
        name="Мишка панда"
        time="2 часа назад"
        isViewed={false}
      />
    </div>
  );
};
