import type { APIRoute } from "astro";
import { posts } from "../allposts.json";
import type { category, postTypes } from "@/pages/blog/index.astro";

export const get: APIRoute = async ({ params }) => {
  const filteredPosts = posts.filter(post => {
    return post.categories.some((category) => category.slug == params.allposts_category_slug);
  });

  return new Response(
    JSON.stringify(filteredPosts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/blog/categories.json");
  const categories: category[] = await response.json();
  
  return [
    categories.map(({ slug })=> {
      return {params: { allposts_category_slug: slug}}
    })
  ]
}