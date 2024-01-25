export const pageRoutingHandler = () => ({
	about: '/about',
	blogs: '/blogs',
	blogsWithId: (id: string) => `/blogs/${id}`,
	home: '/'
});
