import { Button } from "@/components/ui/button";
import type { category, postTypes } from "@/pages/blog/index.astro";
import { CardPost } from "@/components/blog_card";

interface BlogPostsAndCategoriesProps {
    categories: category[],
    posts: postTypes[],
    per_category?: string
}

export function BlogPostsAndCategories({categories, posts, per_category }: BlogPostsAndCategoriesProps) {
    return (
        <div className="container lg:py-20 py-20">
            <ul className="flex gap-4 overflow-auto pt-8 pb-12 px-8 -mx-8">
                <li><Button variant={per_category == undefined ? "default" : "outline"} asChild><a href={`/blog`}>Todos</a></Button></li>
                {categories.map((category) => <li><Button variant={per_category == category.slug ? "default" : "outline"} asChild><a href={`/blog/${category.slug}`}>{category.name}</a></Button></li>)}
            </ul>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-16"
            >
                {
                    posts.map(({ title, description, img, slug, categories }) => (
                        <CardPost
                            categories={categories}
                            title={title}
                            description={description}
                            img={img}
                            slug={slug}
                        />
                    ))
                }
            </div>
        </div>
    )
}