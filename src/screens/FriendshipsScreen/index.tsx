import { Friendship } from "@/components/entities";
import { MainLayout, PageContent } from "@/components/layout";
import { PageTitle } from "@/components/shared";

export const FriendshipsScreen = () => {
  return (
    <MainLayout>
      <PageContent>
        <PageTitle>Приглашения в друзья</PageTitle>

        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Friendship />
          <Friendship />
          <Friendship />
          <Friendship />
          <Friendship />
          <Friendship />
        </div>
      </PageContent>
    </MainLayout>
  );
};
