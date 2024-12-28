const posts = [
    {
      id: 1,
      title: "Building Connections with Purpose",
      href: "#",
      description:
        "How our platform ensures meaningful relationships by user intentions with matchmaking. More than just a call—it's about connecting with intentions.",
      date: "Dec 20, 2024",
      datetime: "2024-12-20",
      category: { title: "Community", href: "#" },
    },
    {
        id: 2,
        title: "How Tokens Work on Our Platform",
        href: "#",
        description:
          "Learn how our tokens let you connect with others and keep things fair. They’re the key to making everything on our platform run smoothly.",
        date: "Dec 18, 2024",
        datetime: "2024-12-18",
        category: { title: "Blockchain", href: "#" },
      },
    {
      id: 3,
      title: "The Tech Behind Seamless Scheduling",
      href: "#",
      description:
        "Dive into the technology that makes our smart scheduling system work. See how we ensure users connect at the right time for the best experience.",
      date: "Dec 15, 2024",
      datetime: "2024-12-15",
      category: { title: "Technology", href: "#" },
    },
  ];
  
  const CardSection = () => {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-primary font-bold text-6xl">Insights</span>  from Our Platform
            </h2>
            <p className="mt-2 text-lg/8 text-secondary-foreground/80">
              Explore stories, updates, and insights to understand how we’re shaping the future of Web3 social connections.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full px-3 py-1.5 font-medium"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CardSection;
  