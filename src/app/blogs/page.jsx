import Link from "next/link";

const page = () => {

    const blogs =
        [
            {
                "slug": "tech-trends-2024",
                "title": "Tech Trends to Watch in 2024",
                "description": "A deep dive into the upcoming technology trends and innovations to keep an eye on in 2024."
            },
            {
                "slug": "healthy-living-tips",
                "title": "Top 10 Tips for Healthy Living",
                "description": "Discover practical tips and advice for maintaining a healthy lifestyle in today's fast-paced world."
            },
            {
                "slug": "travel-destinations-2024",
                "title": "Best Travel Destinations for 2024",
                "description": "Explore the most exciting and exotic travel destinations to visit in 2024."
            },
            {
                "slug": "financial-freedom-guide",
                "title": "Your Guide to Financial Freedom",
                "description": "Step-by-step strategies to help you achieve financial independence and security."
            },
            {
                "slug": "coding-bootcamps-review",
                "title": "Top Coding Bootcamps of 2024",
                "description": "An in-depth review of the best coding bootcamps available in 2024 for aspiring programmers."
            },
            {
                "slug": "sustainable-living-ideas",
                "title": "Sustainable Living: Simple Ideas to Get Started",
                "description": "Practical and easy-to-implement ideas for living a more sustainable and eco-friendly lifestyle."
            }
        ]

    return (
        <div>
            <h1 className=" my-4 font-bold text-center">Blogs</h1>
            <div>
                {
                    blogs.map((blog, idx) =>
                        <div key={idx} className=" my-1 p-4 border-2 mb-2">
                            <h1 className=" font-bold">{blog?.slug}</h1>
                            <hr />
                            <h1>{blog?.title}</h1>
                            <p>{blog?.description}</p>
                            <Link href={`/blogs/${blog?.slug}`}>
                            <button className="btn bg-purple-700 px-3 py-1">View Details</button>
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default page;