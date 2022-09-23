import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import Head from 'next/head';
=======
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> master
>>>>>>> 4ed85ee6a35931608a4bc6bd40311799ca9b085a
import { useRouter } from 'next/router';
import { END } from 'redux-saga';

import axios from 'axios';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import wrapper from '../../store/configureStore';
import PostCard from '../../components/PostCard';
import AppLayout from '../../components/AppLayout';
import { LOAD_MYINFO_REQUEST } from '../../reducers/user';

const Post = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { singlePost } = useSelector((state) => state.post);
    const router = useRouter();
    const { id } = router.query;

    // if (router.isFallback) {
    //   return <div>Loading...</div>
    // }

    return (
        <AppLayout>
            <PostCard post={ singlePost } />
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    console.log(context);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MYINFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
=======
>>>>>>> 4ed85ee6a35931608a4bc6bd40311799ca9b085a
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { id } = router.query;

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
        <meta property="og:description" content={singlePost.content} />
        <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } },
//       { params: { id: '3' } },
//       { params: { id: '4' } },
//     ],
//     fallback: true,
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  console.log(context);
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MYINFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
  return { props: {} };
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 4ed85ee6a35931608a4bc6bd40311799ca9b085a
});

export default Post;