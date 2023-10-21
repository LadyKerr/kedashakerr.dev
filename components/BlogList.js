import Card from './Card'

const BlogList = ({ blogs }) => {
  return (
    <div className="card-container">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
          link={blog.link}
        />
      ))}
    </div>
  )
}

export default BlogList
