import { MuiListInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function BlogPostList() {
  return (
    <>
      <div>
        
      </div>
    </>
  );

}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
