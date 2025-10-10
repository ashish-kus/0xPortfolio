import React, { useEffect, useState } from "react";

export default function LatestBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const res = await fetch("https://0xblogs.ashishkus.com/index.xml");
        const text = await res.text();
        const xml = new window.DOMParser().parseFromString(text, "text/xml");
        const items = [...xml.querySelectorAll("item")].slice(0, 2);

        const blogs = items.map((item) => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          date: item.querySelector("pubDate")?.textContent,
          description: item.querySelector("description")?.textContent,
        }));

        setPosts(blogs);
      } catch (err) {
        console.error("Error fetching RSS:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRSS();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-gray-400">
        Loading latest blogs...
      </div>
    );

  if (posts.length === 0)
    return (
      <div className="text-center py-10 text-gray-400">No blogs found.</div>
    );

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Latest Blogs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary hover:bg-gray-100 text-secondary hover:text-primary transition-all p-6 rounded-xl border-secondary/50 border"
          >
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className=" text-sm mb-4">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className=" text-sm line-clamp-3">
              {post.description?.replace(/<[^>]+>/g, "") || "Read more..."}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
