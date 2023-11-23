import type { APIRoute } from "astro"
import { posts } from "@/pages/api/blog/allposts.json";
import type { postTypes } from "@/pages/blog/index.astro";

export const get: APIRoute = async ({ params }) => {
  
  const post = posts.find((post)=> post.slug == params.slug)

  if(post){
    return new Response(
      JSON.stringify(post), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  return new Response(
    JSON.stringify({ message: "Post não encontrado" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/blog/allposts.json");
  const posts: postTypes[] = await response.json();
  
  return [
    posts.map(({ slug })=> {
      return {params: { slug}}
    })
  ]
}